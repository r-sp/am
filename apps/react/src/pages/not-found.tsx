import { Link } from "react-router-dom";
import Layout from "~/components/layout";
import { errorNotice } from "@repo/data";

export default function NotFound() {
  return (
    <Layout title={errorNotice.name}>
      <article>
        <h1>{errorNotice.name}</h1>
        <p>
          <Link to="/" className="button">
            {errorNotice.text}
          </Link>
        </p>
      </article>
    </Layout>
  );
}
