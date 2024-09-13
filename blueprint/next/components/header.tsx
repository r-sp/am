"use client";

import IconCircle from "./icon-circle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@kb/data";

export default function Header() {
  const currentPath = usePathname();
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <IconCircle className="icon" light="#4EC0ED" dark="#0074E0" size={32} />
          <span className="sr-only">Homepage</span>
        </Link>
        <ul className="links">
          {menu.map((item) => (
            <li className="item" key={item.key}>
              {currentPath === item.slug ? (
                <Link href={item.slug} className="link" aria-current="page">
                  {item.name}
                </Link>
              ) : (
                <Link href={item.slug} className="link">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
