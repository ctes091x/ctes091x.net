import { getCollection } from "astro:content";

/** 下書きを除いた記事を新しい順で返す */
export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** frontmatter の日付は UTC 0 時なので、ISO 文字列の日付部分をそのまま使う */
export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
