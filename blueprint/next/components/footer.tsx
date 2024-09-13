export default function Footer() {
  const current = new Date();
  const text = "Current date: ";
  return (
    <footer className="info">
      <p className="date">
        {text}
        <time className="iso" dateTime={current.toISOString()}>
          {current.toString()}
        </time>
      </p>
    </footer>
  );
}
