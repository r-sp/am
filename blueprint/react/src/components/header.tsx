import { Link } from "react-router-dom";
import IconCircle from "./icon-circle";
import { menu } from "@kb/data";

export default function Header() {
  const currentPath = new URL(import.meta.url).pathname;
  return (
    <header className="navbar">
      <Link to="/" className="logo" tabIndex={-1}>
        <IconCircle className="icon" light="#4EC0ED" dark="#0074E0" size={32} />
        <span className="sr-only">React</span>
      </Link>
      <nav className="links">
        {menu.map((item) =>
          currentPath === item.slug ? (
            <Link to={item.slug} key={item.key} className="link" aria-current="page">
              {item.name}
            </Link>
          ) : (
            <Link to={item.slug} key={item.key} className="link">
              {item.name}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
