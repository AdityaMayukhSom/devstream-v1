import fs from "node:fs";
import path from "node:path";
import React from "react";
import NextPageProps from "@lib/next_page_props";
import { CONTENT_SRC_PATH } from "@lib/constants";

export const runtime = "nodejs";

const AlgorithmsListPage: React.FC<NextPageProps> = () => {
    const articlesDirectory = path.join(process.cwd(), CONTENT_SRC_PATH);
    const fileNames = fs.readdirSync(articlesDirectory);
    const fileList = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));

    return (
        <section>
            {fileList.map((file) => (
                <pre key={`article-file-${file}`}>{file}</pre>
            ))}
        </section>
    );
};

export default AlgorithmsListPage;
