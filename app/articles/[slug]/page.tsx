import ArticleContent from "./ArticleContent";
import Comments from "./Comments";
import { Heading } from "../../components/common";
import LoadingComments from "./LoadingComments";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Article, Comment } from "../../types";

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    // 記事の本文は、更新頻度が高くないと想定できるので、一定期間キャッシュしておくことができる。
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    // notFound 関数を呼び出すと not-fount.tsx を表示する
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data as Article;
};

const getComments = async (slug: string) => {
  const res = await fetch(
    `http://localhost:3000/api/articles/${slug}/comments`,
    {
      // コメントは投稿した後即座に反映されないと不自然。fetch を実行するたびに新しいデータを取得するようにする
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const data = await res.json();
  return data as Comment[];
};

export default async function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const articlePromise = getArticle(params.slug);
  const commentPromise = getComments(params.slug);

  const article = await articlePromise;
  const comments = await commentPromise;

  return (
    <>
      <ArticleContent article={article} />
      <Comments comments={comments} />
    </>
  );
}
