// The home page: a short welcome, the newest events and a few workshops.
//
// The event list and the workshop cards are plain markup for now. When the
// event row (#9) and workshop card (#3) components are merged, swap them in.

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formatEventDate,
  getFirstWorkshopsByName,
  getNewestEvents,
} from "@/lib/dashboard";
import { EVENT_TYPE_LABELS, getEvents, getWorkshops } from "@/lib/data";

const RECENT_EVENT_COUNT = 5;
const WORKSHOP_COUNT = 3;

export default async function HomePage() {
  const recentEvents = getNewestEvents(await getEvents(), RECENT_EVENT_COUNT);
  const workshops = getFirstWorkshopsByName(
    await getWorkshops(),
    WORKSHOP_COUNT,
  );

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          FirstByte Resource Hub
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          One place for FirstByte workshops, their slides and materials, and a
          log of past meetings and events.
        </p>
      </div>

      <section aria-labelledby="recent-events" className="flex flex-col gap-4">
        <SectionHeading
          id="recent-events"
          title="Recent events"
          linkHref="/events"
          linkLabel="See all events"
        />
        <ul className="divide-y rounded-xl ring-1 ring-foreground/10">
          {recentEvents.map((event) => (
            <li
              key={event.id}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <time
                dateTime={event.date}
                className="shrink-0 text-sm text-muted-foreground sm:w-28"
              >
                {formatEventDate(event.date)}
              </time>
              <span className="font-medium">{event.title}</span>
              <Badge variant="secondary" className="sm:ml-auto">
                {EVENT_TYPE_LABELS[event.type]}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="workshops" className="flex flex-col gap-4">
        <SectionHeading
          id="workshops"
          title="Workshops"
          linkHref="/workshops"
          linkLabel="See all workshops"
        />
        <ul className="grid gap-4 sm:grid-cols-3">
          {workshops.map((workshop) => (
            <li key={workshop.id}>
              <Link
                href={`/workshops/${workshop.slug}`}
                className="block h-full rounded-xl transition-shadow hover:shadow-md focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{workshop.name}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {workshop.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// A section title (h2) with a "See all" link on the right.
function SectionHeading({
  id,
  title,
  linkHref,
  linkLabel,
}: {
  id: string;
  title: string;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h2 id={id} className="text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <Link
        href={linkHref}
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
