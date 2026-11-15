import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { EVENT_TYPE_LABELS, TEAM_LABELS, getWorkshopById } from "@/lib/data";
import type { ClubEvent, EventType } from "@/lib/data/types";
import { cn } from "@/lib/utils";

// Each event type gets its own badge colors so GMs and FirstBites stand out.
const TYPE_BADGE_STYLES: Record<EventType, string> = {
  workshop: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  standup: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  gm: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300",
  firstbite:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
};

// One row of the event log: date, title, type badge and team. When the event
// ran a workshop, the title links to that workshop's page.
export async function EventRow({ event }: { event: ClubEvent }) {
  const workshop = event.workshopId
    ? await getWorkshopById(event.workshopId)
    : undefined;

  return (
    <li className="flex gap-4">
      <time
        dateTime={event.date}
        className="w-28 shrink-0 pt-0.5 text-sm text-muted-foreground"
      >
        {formatDate(event.date)}
      </time>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {workshop ? (
            <Link
              href={`/workshops/${workshop.slug}`}
              className="font-medium hover:underline"
            >
              {event.title}
            </Link>
          ) : (
            <span className="font-medium">{event.title}</span>
          )}
          <Badge
            variant="secondary"
            className={cn("border-transparent", TYPE_BADGE_STYLES[event.type])}
          >
            {EVENT_TYPE_LABELS[event.type]}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {TEAM_LABELS[event.team]}
          </span>
        </div>
        {event.notes && (
          <p className="text-sm text-muted-foreground">{event.notes}</p>
        )}
      </div>
    </li>
  );
}

// event.date is "YYYY-MM-DD". Parsing it as UTC midnight and formatting in
// UTC keeps the day from shifting by time zone.
function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
