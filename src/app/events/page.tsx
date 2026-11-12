import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/page-placeholder";
import { getEvents } from "@/lib/data";

export const metadata: Metadata = { title: "Events" };

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <PagePlaceholder title="Events">
      <p>
        The event log (workshops, stand-ups, GMs and FirstBites, grouped by
        semester) is a Sprint 1 ticket. There are {events.length} dummy events
        to show.
      </p>
    </PagePlaceholder>
  );
}
