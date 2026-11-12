import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";
import { getWorkshops } from "@/lib/data";

export const metadata: Metadata = { title: "Workshops" };

export default async function WorkshopsPage() {
  const workshops = await getWorkshops();

  return (
    <PagePlaceholder title="Workshops">
      <p>
        The workshop list is a Sprint 1 ticket. Each workshop gets its own page
        at <code className="font-mono">/workshops/&lt;slug&gt;</code>.
      </p>
      <ul className="list-disc pl-6">
        {workshops.map((workshop) => (
          <li key={workshop.id}>{workshop.name}</li>
        ))}
      </ul>
    </PagePlaceholder>
  );
}
