import Link from "next/link";
import type { Metadata } from "next";
import { notice } from "@kb/data";

export const metadata: Metadata = {
  title: notice.name,
};

export default function NotFound() {
  return (
    <article>
      <h1>{notice.name}</h1>
      <p>
        <Link href="/" className="cta">
          {notice.text}
        </Link>
      </p>
    </article>
  );
}
