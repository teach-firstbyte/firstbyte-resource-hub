import type { Metadata } from "next";

import { WorkshopCard } from "@/components/workshop-card";
import { getWorkshops } from "@/lib/data";

export const metadata: Metadata = { title: "Workshops" };

export default async function WorkshopsPage() {
  const workshops = await getWorkshops();
  const sorted = [...workshops].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Workshops</h1>
        <p className="text-muted-foreground">
          Every workshop FirstByte has run, with slides and materials on each
          workshop&apos;s page.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </main>
  );
}
