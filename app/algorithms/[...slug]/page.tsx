import fs from "node:fs";
import path from "node:path";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";

import { useMDXComponents } from "@/mdx-components";

export const runtime = "nodejs";
export const dynamic = "force-static";

const CONTENT_SRC_PATH = "app/algorithms/contents";

export function generateStaticParams() {
    const targets = fs.readdirSync(path.join(process.cwd(), CONTENT_SRC_PATH), {
        recursive: true,
    });

    const files = [];

    for (const target of targets) {
        const targetPath = path.join(process.cwd(), CONTENT_SRC_PATH, target.toString());
        const targetStats = fs.lstatSync(targetPath);
        if (targetStats.isFile()) {
            files.push(target);
        }
    }

    return files.map((file) => file.toString().replace(".mdx", "").split("/"));
}

export const metadata: Metadata = {};

export default async function AlgorithmsPage({ params }: { params: { slug: string[] } }) {
    const components = useMDXComponents({});
    const sourcePath = path.join(process.cwd(), CONTENT_SRC_PATH, params.slug.join("/")) + ".mdx";
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
                remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
                rehypePlugins: [rehypeSanitize, rehypeHighlight, rehypeHighlightCodeLines],
            },
            parseFrontmatter: true,
        },
        components,
    });

    return (
        <article className="w-full max-w-2xl leading-6 selection:bg-fuchsia-300 selection:text-fuchsia-900">
            {content}
        </article>
    );
}
