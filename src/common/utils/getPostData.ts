import fs from 'fs';
import path from 'path';
import html from 'remark-html';
import { remark } from 'remark';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/common/content/products');

async function getPostData(slug: string, locale: string) {
  try {
    const fullPath = path.join(postsDirectory, locale, `${slug}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(matterResult.content);

    return {
      slug,
      contentHtml: processedContent.toString(),
      ...matterResult.data,
    };
  } catch {
    return null;
  }
}

export default getPostData;
