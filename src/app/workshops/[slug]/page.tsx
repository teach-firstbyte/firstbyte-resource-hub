import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getWorkshopBySlug, getWorkshops } from "@/lib/data";

// Build every workshop page ahead of time (Cache Components is on).
export async function generateStaticParams() {
  const workshops = await getWorkshops();
  return workshops.map((workshop) => ({ slug: workshop.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/workshops/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const workshop = await getWorkshopBySlug(slug);
  return { title: workshop?.name ?? "Workshop" };
}

export default async function WorkshopPage({
  params,
}: PageProps<"/workshops/[slug]">) {
  const { slug } = await params;
  const workshop = await getWorkshopBySlug(slug);
  if (!workshop) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
      <Link
        href="/workshops"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← All workshops
      </Link>

      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {workshop.name}
        </h1>
        <div className="flex flex-wrap gap-1.5">
          {workshop.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground">{workshop.description}</p>
      </header>

      {/* Photos go here — #6 adds <PhotoGallery photos={workshop.photos} /> */}

      {/* Slides and materials go here — #7 adds two <NamedLinkList />
          sections (workshop.slides, workshop.materials) */}

      {/* Past sessions go here — #8 adds
          <PastSessionsList events={...} /> fed by getEventsForWorkshop(workshop.id) */}
    </main>
  );
}
