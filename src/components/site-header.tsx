// The bar at the top of every page, with the logo and the main links.
// It is in src/app/layout.tsx, so every page gets it.
//
// To add a page to the menu, add it to navLinks.

import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/firstbyte-logo.png" alt="" width={32} height={32} />
          FirstByte Resource Hub
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
