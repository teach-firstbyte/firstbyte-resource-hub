// The bar at the top of every page, with the logo and the main links.
// It is in src/app/layout.tsx, so every page gets it.
//
// To add a page to the menu, add it to navLinks.

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/workshops", label: "Workshops" },
  { href: "/events", label: "Events" },
];

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/firstbyte-logo.png" alt="" width={32} height={32} />
          FirstByte Resource Hub
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
