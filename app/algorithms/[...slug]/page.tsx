import fs from "node:fs";
import path from "node:path";

import { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";

import { useMDXComponents } from "@/mdx-components";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
export const dynamic = "force-static";

const contentSource = "app/algorithms/contents";

export function generateStaticParams() {
    const targets = fs.readdirSync(path.join(process.cwd(), contentSource), {
        recursive: true,
    });

    const files = [];

    for (const target of targets) {
        const targetPath = path.join(process.cwd(), contentSource, target.toString());
        const targetStats = fs.lstatSync(targetPath);
        if (targetStats.isFile()) {
            files.push(target);
        }
    }

    return files.map((file) => file.toString().replace(".mdx", "").split("/"));
}

interface Params {
    params: {
        slug: string[];
    };
}

export const metadata: Metadata = {};

export default async function AlgorithmsPage({ params }: Params) {
    const components = useMDXComponents({});
    const sourcePath = path.join(process.cwd(), contentSource, params.slug.join("/")) + ".mdx";
    if (!fs.existsSync(sourcePath)) {
        notFound();
    }

    const sourceStats = fs.statSync(sourcePath);

    if (!sourceStats.isFile()) {
        throw new Error(`${params.slug.at(params.slug.length - 1)} is not a valid file.`);
    }

    const source = fs.readFileSync(sourcePath, "utf-8");

    const { content, frontmatter } = await compileMDX({
        source,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
                rehypePlugins: [rehypeHighlight, rehypeHighlightCodeLines],
            },
            parseFrontmatter: true,
        },
        components,
    });

    return <article className="pt-36 pb-32 ml-60 w-1/2">{content}</article>;
}
