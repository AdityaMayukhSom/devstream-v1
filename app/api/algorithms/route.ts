import fs from "node:fs";
import path from "node:path";
import { CONTENT_SRC_PATH } from "@lib/constants";

export const runtime = "nodejs";
export const dynamic = "error";

function throughDirectory(directory: string, fileList: Array<String>): void {
    const directoryPath = path.resolve(directory);

    if (!fs.existsSync(directoryPath)) return;
    if (!fs.statSync(directoryPath).isDirectory()) return;

    const directoryContents = fs.readdirSync(directoryPath, {
        encoding: "utf-8",
        withFileTypes: true,
    });

    for (const content of directoryContents) {
        const absolutePath = path.join(directory, content.name);
        const fileStatistics = fs.statSync(absolutePath);
        if (fileStatistics.isFile() && content.name.endsWith(".mdx")) {
            fileList.push(content.name.split(".")[0]);
        } else if (fileStatistics.isDirectory()) {
            throughDirectory(absolutePath, fileList);
        }
    }
}

