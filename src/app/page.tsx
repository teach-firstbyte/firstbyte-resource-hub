import { PagePlaceholder } from "@/components/page-placeholder";
import { getEvents, getWorkshops } from "@/lib/data";

export default async function HomePage() {
  const workshops = await getWorkshops();
  const events = await getEvents();

  return (
    <PagePlaceholder title="FirstByte Resource Hub">
      <p>
        One place for FirstByte workshops, their slides and materials, and a log
        of past meetings and events.
      </p>
      <p>
        The dashboard (recent events and featured workshops) is a Sprint 1
        ticket. The data is ready: {workshops.length} workshops and{" "}
        {events.length} events from{" "}
        <code className="font-mono">src/lib/data</code>.
      </p>
    </PagePlaceholder>
  );
}
