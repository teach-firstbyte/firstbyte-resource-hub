// The shapes of our data. Every page, component and test uses these types, so
// if you change one here, TypeScript shows you everywhere that needs updating.
//
// There are two kinds of things:
//   Workshop   teaching content we can run again and again (slides, materials)
//   ClubEvent  something that happened on a date (a workshop session, a GM...)
//
// A ClubEvent of type "workshop" can point at the Workshop it ran, using
// workshopId. We call it ClubEvent, not Event, because browsers already have a
// built-in type called Event.

// A link with a name to show, for example { label: "Slides", url: "https://..." }.
export type NamedLink = {
  label: string;
  url: string;
};

export type Photo = {
  // A path in public/ (like "/workshops/placeholder-1.svg") or a full https URL.
  src: string;
  // Describes the photo for people using screen readers. Always fill it in.
  alt: string;
};

export type Workshop = {
  id: string;
  // The part of the URL for this workshop: /workshops/<slug>.
  // Lowercase words joined by dashes, and unique.
  slug: string;
  name: string;
  description: string;
  // Free tags, lowercase, for example ["cs", "python", "beginner"]. Topics and
  // curriculum type (cs or stem) are both just tags.
  tags: string[];
  photos: Photo[];
  materials: NamedLink[];
  slides: NamedLink[];
};

// "as const" keeps the exact words, so EventType is
// "workshop" | "standup" | "gm" | "firstbite" and not just string.
export const EVENT_TYPES = ["workshop", "standup", "gm", "firstbite"] as const;
export type EventType = (typeof EVENT_TYPES)[number];

// The words we show on screen for each event type.
export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  workshop: "Workshop",
  standup: "Stand-up",
  gm: "GM",
  firstbite: "FirstBite",
};

// Every event belongs to exactly one of these. "club-wide" is for events for
// the whole club. Treasurer is a role, not a team, but it has its own meetings.
export const TEAMS = [
  "club-wide",
  "website",
  "cs-curricula",
  "stem-curricula",
  "branding",
  "events",
  "e-board",
  "treasurer",
] as const;
export type Team = (typeof TEAMS)[number];

export const TEAM_LABELS: Record<Team, string> = {
  "club-wide": "Club-wide",
  website: "Website Team",
  "cs-curricula": "CS Curricula Team",
  "stem-curricula": "STEM Curricula Team",
  branding: "Branding Team",
  events: "Events Team",
  "e-board": "E-board",
  treasurer: "Treasurer",
};

export type ClubEvent = {
  id: string;
  title: string;
  type: EventType;
  // The day it happened, written as "YYYY-MM-DD" (for example "2026-10-07").
  // The semester is worked out from this date. See semester.ts.
  date: string;
  team: Team;
  // Only for type "workshop": the id of the Workshop that was run.
  workshopId?: string;
  notes?: string;
};
