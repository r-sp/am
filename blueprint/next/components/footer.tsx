export default function Footer() {
  const current = new Date();
  return (
    <footer>
      <time dateTime={current.toISOString()}>{current.toString()}</time>
    </footer>
  );
}
