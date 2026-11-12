// Checks that the dummy data follows our rules. If someone adds a workshop
// with a duplicate slug, or an event that points at a workshop that doesn't
// exist, this fails in CI before it can break a page.

import { describe, expect, it } from "vitest";

import { getSemester } from "../semester";
import { EVENT_TYPES, TEAMS } from "../types";
import { events } from "./events";
import { workshops } from "./workshops";

describe("dummy workshops", () => {
  it("have unique ids and slugs", () => {
    const ids = workshops.map((workshop) => workshop.id);
    const slugs = workshops.map((workshop) => workshop.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("have URL-friendly slugs and lowercase tags", () => {
    for (const workshop of workshops) {
      expect(workshop.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      for (const tag of workshop.tags) {
        expect(tag).toBe(tag.toLowerCase());
      }
    }
  });

  it("give every photo alt text", () => {
    for (const workshop of workshops) {
      for (const photo of workshop.photos) {
        expect(photo.alt.trim()).not.toBe("");
      }
    }
  });
});

describe("dummy events", () => {
  it("have unique ids", () => {
    const ids = events.map((event) => event.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("use a known type, team and a valid date", () => {
    for (const event of events) {
      expect(EVENT_TYPES).toContain(event.type);
      expect(TEAMS).toContain(event.team);
      expect(() => getSemester(event.date)).not.toThrow();
    }
  });

  it("only link to workshops that exist, and only from workshop events", () => {
    const workshopIds = new Set(workshops.map((workshop) => workshop.id));
    for (const event of events) {
      if (event.workshopId !== undefined) {
        expect(event.type).toBe("workshop");
        expect(workshopIds).toContain(event.workshopId);
      }
    }
  });
});
