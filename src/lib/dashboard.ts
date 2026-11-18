// Small helpers for the home page dashboard (src/app/page.tsx).
//
// They take the data as an argument instead of calling getEvents() or
// getWorkshops() themselves, so the tests can pass in their own small lists.

import type { ClubEvent, Workshop } from "@/lib/data";

// The `count` newest events, newest first. Does not change the list you pass in.
//
// event.date is "YYYY-MM-DD", so comparing the text gives the same order as
// comparing the dates: "2026-11-07" comes after "2026-10-24".
export function getNewestEvents(
  events: ClubEvent[],
  count: number,
): ClubEvent[] {
  return [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

// The first `count` workshops in A–Z order by name. Does not change the list
// you pass in.
export function getFirstWorkshopsByName(
  workshops: Workshop[],
  count: number,
): Workshop[] {
  return [...workshops]
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }))
    .slice(0, count);
}

// Turns "2026-11-07" into "Nov 7, 2026".
//
// new Date("2026-11-07") means midnight in UTC. If we formatted it in the
// viewer's time zone, someone in Boston would see Nov 6. Formatting in UTC
// too keeps the day the same for everyone.
export function formatEventDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
