import { describe, expect, it } from "vitest";

import type { ClubEvent, Workshop } from "@/lib/data";

import {
  formatEventDate,
  getFirstWorkshopsByName,
  getNewestEvents,
} from "./dashboard";

function makeEvent(id: string, date: string): ClubEvent {
  return { id, title: `Event ${id}`, type: "gm", date, team: "club-wide" };
}

function makeWorkshop(id: string, name: string): Workshop {
  return {
    id,
    slug: id,
    name,
    description: "",
    tags: [],
    photos: [],
    materials: [],
    slides: [],
  };
}

describe("getNewestEvents", () => {
  const events = [
    makeEvent("a", "2025-09-10"),
    makeEvent("b", "2026-11-07"),
    makeEvent("c", "2026-03-14"),
    makeEvent("d", "2026-10-24"),
  ];

  it("returns the newest events first", () => {
    expect(getNewestEvents(events, 3).map((event) => event.id)).toEqual([
      "b",
      "d",
      "c",
    ]);
  });

  it("returns every event when there are fewer than asked for", () => {
    expect(getNewestEvents(events, 10)).toHaveLength(4);
  });

  it("does not change the list passed in", () => {
    getNewestEvents(events, 2);
    expect(events.map((event) => event.id)).toEqual(["a", "b", "c", "d"]);
  });
});

describe("getFirstWorkshopsByName", () => {
  const workshops = [
    makeWorkshop("1", "Python Turtle Art"),
    makeWorkshop("2", "egg Drop Engineering"),
    makeWorkshop("3", "What Is AI?"),
    makeWorkshop("4", "Build Your First Website"),
  ];

  it("returns the first workshops A to Z, ignoring upper and lower case", () => {
    expect(
      getFirstWorkshopsByName(workshops, 3).map((workshop) => workshop.name),
    ).toEqual([
      "Build Your First Website",
      "egg Drop Engineering",
      "Python Turtle Art",
    ]);
  });

  it("does not change the list passed in", () => {
    getFirstWorkshopsByName(workshops, 2);
    expect(workshops.map((workshop) => workshop.id)).toEqual([
      "1",
      "2",
      "3",
      "4",
    ]);
  });
});

describe("formatEventDate", () => {
  it("formats a date like Nov 7, 2026", () => {
    expect(formatEventDate("2026-11-07")).toBe("Nov 7, 2026");
  });

  it("keeps the first day of the month (no time zone shift)", () => {
    expect(formatEventDate("2026-01-01")).toBe("Jan 1, 2026");
  });
});
