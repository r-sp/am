import Layout from "~/components/layout";
import { mockArticle } from "@kb/data";

export default function Blog() {
  return (
    <Layout title="Blog">
      <article>
        <h1>Blog</h1>
        {mockArticle.map((post) => (
          <section key={post.id} id={`post-${post.id}`} aria-label={post.title}>
            <a href={post.url} className="article">
              <h2 className="title">{post.title}</h2>
              <p className="description">{post.description}</p>
            </a>
          </section>
        ))}
      </article>
    </Layout>
  );
}
