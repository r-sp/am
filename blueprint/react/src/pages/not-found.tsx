import { Link } from "react-router-dom";
import Layout from "~/components/layout";
import { notice } from "@kb/data";

export default function NotFound() {
  return (
    <Layout title={notice.name}>
      <article>
        <h1>{notice.name}</h1>
        <p>
          <Link to="/" className="button">
            {notice.text}
          </Link>
        </p>
      </article>
    </Layout>
  );
}
