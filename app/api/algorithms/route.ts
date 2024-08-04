import fs from "node:fs";
import path from "node:path";
import { CONTENT_SRC_PATH } from "@lib/constants";

export const runtime = "nodejs";
export const dynamic = "error";

export async function GET(request: Request) {
    const articlesDirectory = path.join(process.cwd(), CONTENT_SRC_PATH);
    const fileNames = fs.readdirSync(articlesDirectory);
    const fileList = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
    const payload = { fileList };
    return Response.json(payload, { status: 200 });
}
