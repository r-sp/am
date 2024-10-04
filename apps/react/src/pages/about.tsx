import Layout from "~/components/layout";

export default function About() {
  return (
    <Layout title="Get Started">
      <article>
        <h1>Get Started with React</h1>
        <p>Create a new project with npm</p>
        <pre>
          <code>
            <span className="gray">npm </span>
            <span className="white">
              create vite@latest my-react-app -- --template react-swc
            </span>
          </code>
        </pre>
        <p>Learn more about:</p>
        <ul>
          <li>
            <a
              href="https://reacthandbook.dev/project-standards#file-directory-structures"
              className="docs"
              target="_blank"
            >
              Project Structure
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  );
}
