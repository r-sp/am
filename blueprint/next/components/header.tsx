"use client";

import IconCircle from "./icon-circle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@kb/data";

export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="navbar">
      <Link href="/" className="logo" tabIndex={-1}>
        <IconCircle className="icon" light="#4EC0ED" dark="#0074E0" size={32} />
        <span className="sr-only">Next.js</span>
      </Link>
      <nav className="links">
        {menu.map((item) =>
          currentPath === item.slug ? (
            <Link href={item.slug} key={item.key} className="link" aria-current="page">
              {item.name}
            </Link>
          ) : (
            <Link href={item.slug} key={item.key} className="link">
              {item.name}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
