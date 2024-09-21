import Layout from "~/components/layout";

export default function Home() {
  return (
    <Layout title="Home" useTitle={false}>
      <article>
        <h1>React</h1>
        <p>The library for web and native user interfaces</p>
      </article>
    </Layout>
  );
}
