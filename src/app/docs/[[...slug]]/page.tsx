import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Mdx } from "@/app/components/MDXComponents";

const docsDirectory = path.join(process.cwd(), "src/content");

const getDocContent = (slug: string[]) => {
  const filePath = path.join(docsDirectory, ...slug) + ".mdx";
  if (!fs.existsSync(filePath)) {
    throw new Error(`Document not found: ${slug.join("/")}`);
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  return content;
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const slugPath = slug || ["index"]; // Default to 'index' if no slug
  const content = getDocContent(slugPath);

  return (
    <article>
      <Mdx content={content} />
    </article>
  );
}
