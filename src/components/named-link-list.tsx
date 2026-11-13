import { ExternalLink } from "lucide-react";

import type { NamedLink } from "@/lib/data/types";

// One titled section of links ("Slides" or "Materials") on a workshop page.
// Each link opens in a new tab. When there are no links it shows
// `emptyMessage` instead of an empty list.
export function NamedLinkList({
  title,
  links,
  emptyMessage,
}: {
  title: string;
  links: NamedLink[];
  emptyMessage: string;
}) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {links.length === 0 ? (
        <p className="text-muted-foreground">{emptyMessage}</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
              >
                {link.label}
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
