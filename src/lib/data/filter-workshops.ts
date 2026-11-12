import type { Workshop } from "./types";

export type WorkshopFilterOptions = {
  q?: string;
  tags?: string[];
  sort?: "name" | "name-desc";
};

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function filterWorkshops(
  workshops: Workshop[],
  { q, tags, sort = "name" }: WorkshopFilterOptions = {},
): Workshop[] {
  let result = [...workshops];

  const normalizedQuery = q ? normalizeText(q) : "";
  if (normalizedQuery) {
    result = result.filter((workshop) =>
      normalizeText(workshop.name).includes(normalizedQuery),
    );
  }

  if (tags && tags.length > 0) {
    result = result.filter((workshop) =>
      tags.every((tag) => workshop.tags.includes(tag)),
    );
  }

  result.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sort === "name-desc" ? -comparison : comparison;
  });

  return result;
}

export function getAllTags(workshops: Workshop[]): string[] {
  const uniqueTags = new Set<string>();
  for (const workshop of workshops) {
    for (const tag of workshop.tags) {
      uniqueTags.add(tag);
    }
  }
  return [...uniqueTags].sort((a, b) => a.localeCompare(b));
}
