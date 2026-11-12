// A stand-in for a page that a ticket will build. Delete it from a page when
// you build that page for real. Delete this file when no page uses it.

import type { ReactNode } from "react";

export function PagePlaceholder({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <div className="flex flex-col gap-2 rounded-lg border border-dashed p-6 text-muted-foreground">
        {children}
      </div>
    </main>
  );
}
