// The page people see when a URL doesn't exist, like /nothing-here.
// Next.js also shows it when a page calls notFound() from "next/navigation",
// for example a workshop page whose slug isn't in our data.
//
// The site header comes from src/app/layout.tsx, so it isn't added here.

import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

// Shows "Page not found | FirstByte Resource Hub" in the browser tab.
export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        We couldn&apos;t find that page
      </h1>
      <p className="text-muted-foreground">
        The link might be old, or the address might have a typo. Try one of
        these pages instead.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/workshops">See Workshops</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/events">See Events</Link>
        </Button>
      </div>
    </main>
  );
}
