import { describe, expect, it } from "vitest";

import { getSemester } from "./semester";

describe("getSemester", () => {
  it("puts January to April in Spring", () => {
    expect(getSemester("2026-01-01").label).toBe("Spring 2026");
    expect(getSemester("2026-04-30").label).toBe("Spring 2026");
  });

  it("puts May to August in Summer", () => {
    expect(getSemester("2026-05-01").label).toBe("Summer 2026");
    expect(getSemester("2026-08-31").label).toBe("Summer 2026");
  });

  it("puts September to December in Fall", () => {
    expect(getSemester("2026-09-01")).toEqual({
      term: "Fall",
      year: 2026,
      label: "Fall 2026",
    });
    expect(getSemester("2026-12-31").label).toBe("Fall 2026");
  });

  it("rejects text that is not a YYYY-MM-DD date", () => {
    expect(() => getSemester("10/07/2026")).toThrow();
    expect(() => getSemester("2026-13-01")).toThrow();
  });
});
