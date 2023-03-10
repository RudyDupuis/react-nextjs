import Link from "next/link";
import React from "react";

const Article = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className="article">
        <h3>{article.title} &rarr; </h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default Article;
