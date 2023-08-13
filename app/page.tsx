import { Heading } from "./components/common";
import { Article } from "./types";
import ArticleList from "./components/ArticleList";


async function getArticles() {
  const res = await fetch("http://localhost:3002/api/articles", {
    // 新着の記事の一覧を取得しているので、データの更新が頻繁に行われる可能性がある。fetch を実行するたびに新しいデータを取得するようにする
    cache: "no-store",
  });

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }


  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <>
    <Heading as="h1" mb={4}>
      新着記事
    </Heading>
    <ArticleList articles={articles} />
  </>
  );
}