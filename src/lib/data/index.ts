// The one place pages and components get data from.
//
// Right now these functions read the dummy data in ./dummy/. In Sprint 2 they
// will read from Supabase instead. Pages call these functions and never import
// the dummy files, so only this folder changes when that happens.
//
// They are async (they return a Promise) even though the dummy data is
// already in memory, because database calls are async. Use them with await:
//
//   const workshops = await getWorkshops();

import { events } from "./dummy/events";
import { workshops } from "./dummy/workshops";
import type { ClubEvent, Workshop } from "./types";

export * from "./types";
export * from "./semester";

// Every workshop, in no particular order. Sorting and filtering go in their
// own helpers (see the Sprint 2 tickets).
export async function getWorkshops(): Promise<Workshop[]> {
  return workshops;
}

// The workshop with this slug, or undefined if there is none. Pages should
// show a "not found" page when this returns undefined.
export async function getWorkshopBySlug(
  slug: string,
): Promise<Workshop | undefined> {
  return workshops.find((workshop) => workshop.slug === slug);
}

export async function getWorkshopById(
  id: string,
): Promise<Workshop | undefined> {
  return workshops.find((workshop) => workshop.id === id);
}

// Every event, in no particular order.
export async function getEvents(): Promise<ClubEvent[]> {
  return events;
}

// The events that ran this workshop, for example to show "Past sessions" on a
// workshop's page.
export async function getEventsForWorkshop(
  workshopId: string,
): Promise<ClubEvent[]> {
  return events.filter((event) => event.workshopId === workshopId);
}
