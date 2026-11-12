import { describe, expect, it } from "vitest";

import { filterWorkshops, getAllTags } from "./filter-workshops";
import type { Workshop } from "./types";

const workshops: Workshop[] = [
  {
    id: "w1",
    slug: "intro-to-scratch",
    name: "Intro to Scratch",
    description: "",
    tags: ["cs", "scratch", "beginner"],
    photos: [],
    materials: [],
    slides: [],
  },
  {
    id: "w2",
    slug: "python-turtle-art",
    name: "Python Turtle Art",
    description: "",
    tags: ["cs", "python", "beginner", "art"],
    photos: [],
    materials: [],
    slides: [],
  },
  {
    id: "w3",
    slug: "build-your-first-website",
    name: "Build Your First Website",
    description: "",
    tags: ["cs", "web", "html", "intermediate"],
    photos: [],
    materials: [],
    slides: [],
  },
];

describe("filterWorkshops", () => {
  it("returns all workshops sorted A–Z by default when no filters are provided", () => {
    const result = filterWorkshops(workshops);
    expect(result.map((w) => w.name)).toEqual([
      "Build Your First Website",
      "Intro to Scratch",
      "Python Turtle Art",
    ]);
    // does not mutate input
    expect(workshops.map((w) => w.name)).toEqual([
      "Intro to Scratch",
      "Python Turtle Art",
      "Build Your First Website",
    ]);
  });

  it("matches search with mixed case and ignores extra spaces", () => {
    const result = filterWorkshops(workshops, { q: "  pyThon   TURTLE  " });
    expect(result.map((w) => w.name)).toEqual(["Python Turtle Art"]);
  });

  it("keeps workshops that have one chosen tag", () => {
    const result = filterWorkshops(workshops, { tags: ["web"] });
    expect(result.map((w) => w.name)).toEqual(["Build Your First Website"]);
  });

  it("keeps workshops that have all chosen tags", () => {
    const result = filterWorkshops(workshops, { tags: ["cs", "beginner"] });
    expect(result.map((w) => w.name)).toEqual([
      "Intro to Scratch",
      "Python Turtle Art",
    ]);
  });

  it("returns an empty list when search has no results", () => {
    const result = filterWorkshops(workshops, { q: "robotics" });
    expect(result).toEqual([]);
  });

  it("sorts by name descending when requested", () => {
    const result = filterWorkshops(workshops, { sort: "name-desc" });
    expect(result.map((w) => w.name)).toEqual([
      "Python Turtle Art",
      "Intro to Scratch",
      "Build Your First Website",
    ]);
  });
});

describe("getAllTags", () => {
  it("returns every tag once, A–Z", () => {
    expect(getAllTags(workshops)).toEqual([
      "art",
      "beginner",
      "cs",
      "html",
      "intermediate",
      "python",
      "scratch",
      "web",
    ]);
  });
});
