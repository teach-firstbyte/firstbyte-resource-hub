import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import NotFound, { metadata } from "./not-found";

describe("NotFound page", () => {
  const html = renderToStaticMarkup(<NotFound />);

  it("says the page wasn't found", () => {
    expect(html).toContain("couldn&#x27;t find that page");
  });

  it("links to Home, Workshops and Events", () => {
    expect(html).toContain('href="/"');
    expect(html).toContain('href="/workshops"');
    expect(html).toContain('href="/events"');
  });

  it("sets the page title", () => {
    expect(metadata.title).toBe("Page not found");
  });
});
