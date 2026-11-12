// DUMMY DATA: made-up past meetings and events across three semesters, so we
// can build the event log before the database exists. In Sprint 2 this moves
// into Supabase.
//
// Don't import this file in pages or components. Use the functions in
// src/lib/data/index.ts.

import type { ClubEvent } from "../types";

export const events: ClubEvent[] = [
  // Fall 2025
  {
    id: "e1",
    title: "Fall Kickoff GM",
    type: "gm",
    date: "2025-09-10",
    team: "club-wide",
    notes: "Welcomed new members and introduced every team.",
  },
  {
    id: "e2",
    title: "Intro to Scratch at Mission Hill School",
    type: "workshop",
    date: "2025-10-04",
    team: "cs-curricula",
    workshopId: "w1",
  },
  {
    id: "e3",
    title: "Website Team stand-up",
    type: "standup",
    date: "2025-10-08",
    team: "website",
  },
  {
    id: "e4",
    title: "Pizza FirstBite",
    type: "firstbite",
    date: "2025-10-23",
    team: "club-wide",
    notes: "Social night for new and old members.",
  },
  {
    id: "e5",
    title: "Play-Dough Circuits at the Boys & Girls Club",
    type: "workshop",
    date: "2025-11-15",
    team: "stem-curricula",
    workshopId: "w4",
  },
  {
    id: "e6",
    title: "Budget check-in",
    type: "standup",
    date: "2025-11-19",
    team: "treasurer",
  },

  // Spring 2026
  {
    id: "e7",
    title: "Spring Kickoff GM",
    type: "gm",
    date: "2026-01-14",
    team: "club-wide",
  },
  {
    id: "e8",
    title: "E-board planning meeting",
    type: "standup",
    date: "2026-01-20",
    team: "e-board",
    notes: "Set goals for the semester.",
  },
  {
    id: "e9",
    title: "Python Turtle Art at Mission Hill School",
    type: "workshop",
    date: "2026-02-07",
    team: "cs-curricula",
    workshopId: "w2",
  },
  {
    id: "e10",
    title: "Logo refresh stand-up",
    type: "standup",
    date: "2026-02-11",
    team: "branding",
  },
  {
    id: "e11",
    title: "Egg Drop Engineering at the library",
    type: "workshop",
    date: "2026-03-14",
    team: "stem-curricula",
    workshopId: "w5",
  },
  {
    id: "e12",
    title: "Game Night FirstBite",
    type: "firstbite",
    date: "2026-03-26",
    team: "club-wide",
  },
  {
    id: "e13",
    title: "Spring showcase planning",
    type: "standup",
    date: "2026-04-01",
    team: "events",
  },
  {
    id: "e14",
    title: "End of Year GM",
    type: "gm",
    date: "2026-04-15",
    team: "club-wide",
    notes: "Elections for next year's E-board.",
  },

  // Fall 2026
  {
    id: "e15",
    title: "Fall Kickoff GM",
    type: "gm",
    date: "2026-09-09",
    team: "club-wide",
  },
  {
    id: "e16",
    title: "Resource Hub kickoff",
    type: "standup",
    date: "2026-09-16",
    team: "website",
    notes: "Started planning this website.",
  },
  {
    id: "e17",
    title: "Build Your First Website at Mission Hill School",
    type: "workshop",
    date: "2026-10-03",
    team: "cs-curricula",
    workshopId: "w3",
  },
  {
    id: "e18",
    title: "Ice Cream FirstBite",
    type: "firstbite",
    date: "2026-10-15",
    team: "club-wide",
  },
  {
    id: "e19",
    title: "What Is AI? at the Boys & Girls Club",
    type: "workshop",
    date: "2026-10-24",
    team: "cs-curricula",
    workshopId: "w6",
  },
  {
    id: "e20",
    title: "Intro to Scratch at the library",
    type: "workshop",
    date: "2026-11-07",
    team: "events",
    workshopId: "w1",
  },
];
