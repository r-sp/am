import Link from "next/link";
import type { Metadata } from "next";
import { errorNotice } from "@repo/data";

export const metadata: Metadata = {
  title: errorNotice.name,
};

export default function NotFound() {
  return (
    <article>
      <h1>{errorNotice.name}</h1>
      <p>
        <Link href="/" className="button">
          {errorNotice.text}
        </Link>
      </p>
    </article>
  );
}
