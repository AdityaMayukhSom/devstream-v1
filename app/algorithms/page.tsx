import fs from "node:fs";
import path from "node:path";

import React from "react";
import matter from "gray-matter";

import NextPageProps from "@lib/next_page_props";
import { CONTENT_SRC_PATH } from "@lib/constants";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-static";

interface ArticleDetails {
    name: string;
    title: string;
    publishedOn: Date;
}

const AlgorithmListItem = (articleDetails: ArticleDetails) => {
    const articleUrl = `/algorithms/${articleDetails.name}`;
    return (
        <section key={`article-file-${articleDetails.name}`} className="w-full flex justify-between">
            <Link
                href={articleUrl}
                className="border-spacing-1 border-b-2 transition-all ease-in-out duration-150 border-gray-500 hover:border-gray-100"
            >
                {articleDetails.title}
            </Link>
            <span>{articleDetails.publishedOn.toDateString()}</span>
        </section>
    );
};

const AlgorithmsListPage: React.FC<NextPageProps> = () => {
    const articlesDirectory = path.join(process.cwd(), CONTENT_SRC_PATH);
    const fileNames = fs.readdirSync(articlesDirectory);
    const fileList = fileNames.map((fileName): ArticleDetails => {
        const articleName = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, { encoding: "utf-8" });
        const matterResult = matter(fileContents);
        const articleTitle: string = matterResult.data.title ?? "title not found";
        const articlePublishedOn: string = matterResult.data["published-on"] ?? new Date().toDateString();
        const articleDetails: ArticleDetails = {
            name: articleName,
            title: articleTitle,
            publishedOn: new Date(articlePublishedOn),
        };
        return articleDetails;
    });

    return (
        <main className="bg-dark-base text-white min-h-svh text-sm pt-36">
            <section className="grid w-full max-w-xl m-auto gap-y-1">{fileList.map(AlgorithmListItem)}</section>
        </main>
    );
};

export default AlgorithmsListPage;
