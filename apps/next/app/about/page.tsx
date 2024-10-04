import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started",
};

export default function About() {
  return (
    <article>
      <h1>Get Started with Next.js</h1>
      <p>Create a new project with npm</p>
      <pre>
        <code>
          <span className="gray">npm </span>
          <span className="white">create-next-app@latest</span>
        </code>
      </pre>
      <p>Learn more about:</p>
      <ul>
        <li>
          <Link
            href="https://nextjs.org/docs/getting-started/project-structure"
            className="docs"
            target="_blank"
          >
            Project Structure
          </Link>
        </li>
      </ul>
    </article>
  );
}
