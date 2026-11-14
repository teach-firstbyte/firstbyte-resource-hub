import type { ClubEvent } from "@/lib/data/types";
import { getSemester, TEAM_LABELS } from "@/lib/data";

// The "Past sessions" section on a workshop page: every event that ran this
// workshop, newest first. Shows "Not run yet." when the list is empty.
export function PastSessionsList({ events }: { events: ClubEvent[] }) {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Past sessions</h2>
      {sorted.length === 0 ? (
        <p className="text-muted-foreground">Not run yet.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {sorted.map((event) => (
            <li key={event.id} className="flex flex-col">
              <span className="font-medium">{event.title}</span>
              <span className="text-sm text-muted-foreground">
                {formatDate(event.date)} · {getSemester(event.date).label} ·{" "}
                {TEAM_LABELS[event.team]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
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
