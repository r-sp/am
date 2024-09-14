import type { Metadata } from "next";
import Link from "next/link";
import { article } from "@kb/data";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <article>
      <h1>Blog</h1>
      {article.map((post) => (
        <section key={post.id} id={`post-${post.id}`} aria-label={post.title}>
          <Link href={post.url} className="article">
            <h2 className="title">{post.title}</h2>
            <p className="description">{post.description}</p>
          </Link>
        </section>
      ))}
    </article>
  );
}
