// Works out the academic semester from a date, so nobody has to type it in.
//
//   January to April      Spring
//   May to August         Summer
//   September to December Fall

export const TERMS = ["Spring", "Summer", "Fall"] as const;
export type Term = (typeof TERMS)[number];

export type Semester = {
  term: Term;
  year: number;
  // For showing on screen and in URLs, for example "Fall 2026".
  label: string;
};

// date is "YYYY-MM-DD". We read the numbers straight from the text instead of
// using new Date(), because new Date() can shift the day by time zone.
export function getSemester(date: string): Semester {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) {
    throw new Error(`Expected a date like "2026-10-07", got "${date}".`);
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) {
    throw new Error(`"${date}" has no month ${month}.`);
  }

  const term: Term = month <= 4 ? "Spring" : month <= 8 ? "Summer" : "Fall";
  return { term, year, label: `${term} ${year}` };
}
