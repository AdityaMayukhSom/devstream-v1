import fs from "node:fs";
import path from "node:path";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";

import { useMDXComponents } from "@/mdx-components";
import { CONTENT_SRC_PATH } from "@lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-static";

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

    const params = files.map((file) => file.toString().replace(".mdx", "").split("/"));
    return params;
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
                rehypePlugins: [rehypeHighlight, rehypeHighlightCodeLines],
            },
            parseFrontmatter: true,
        },
        components,
    });

    const articleTitle = frontmatter.title as string;

    return (
        <>
            <header className="px-4 pt-4 pb-0 lg:pb-20 font-medium text-xs flex items-center">
                <a href="/algorithms">Algorithms</a>
                &nbsp;&gt;&nbsp;
                <p>{articleTitle}</p>
            </header>
            <main className="pt-16 pb-8 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-52">
                <article className="w-full max-w-2xl leading-6 selection:bg-fuchsia-300 selection:text-fuchsia-900">
                    {content}
                </article>
            </main>
            <footer className="px-8 sm:px-12 md:px-20 lg:px-32 xl:px-52 mt-8">
                <div className="border-t border-gray-700 py-6">Team Devstream.</div>
            </footer>
        </>
    );
}
