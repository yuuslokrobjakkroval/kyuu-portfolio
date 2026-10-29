import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import matter from "gray-matter";

const contentDir = new URL("../src/features/blog/content/", import.meta.url);
const outputDir = new URL("../src/generated/", import.meta.url);
await mkdir(outputDir, { recursive: true });
const posts = await Promise.all(
  (await readdir(contentDir))
    .filter((file) => file.endsWith(".mdx"))
    .sort()
    .map(async (file) => {
      const { data, content } = matter(
        await readFile(new URL(file, contentDir), "utf8")
      );
      return { metadata: data, slug: file.slice(0, -4), content };
    })
);
await writeFile(new URL("posts.json", outputDir), JSON.stringify(posts));
const fonts = {};
for (const name of [
  "Magistral-Medium",
  "Roboto-Medium",
  "RobotoCondensed-Medium",
]) {
  fonts[name] = (
    await readFile(new URL(`../src/assets/fonts/${name}.ttf`, import.meta.url))
  ).toString("base64");
}
await writeFile(new URL("fonts.json", outputDir), JSON.stringify(fonts));
