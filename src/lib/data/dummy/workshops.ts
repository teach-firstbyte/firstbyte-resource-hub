// DUMMY DATA: made-up workshops so we can build pages before the database
// exists. In Sprint 2 this moves into Supabase. Every link here points at
// example.com on purpose: they are not real.
//
// Don't import this file in pages or components. Use the functions in
// src/lib/data/index.ts, so the pages keep working when the data moves.

import type { Workshop } from "../types";

export const workshops: Workshop[] = [
  {
    id: "w1",
    slug: "intro-to-scratch",
    name: "Intro to Scratch",
    description:
      "Students make a sprite move, talk and react to the keyboard. They learn what a loop and an event are by building a tiny game.",
    tags: ["cs", "scratch", "beginner", "games"],
    photos: [
      {
        src: "/workshops/placeholder-1.svg",
        alt: "Students working on Scratch projects at laptops",
      },
      {
        src: "/workshops/placeholder-2.svg",
        alt: "A volunteer helping a student with a Scratch sprite",
      },
    ],
    materials: [
      {
        label: "Lesson plan",
        url: "https://example.com/intro-to-scratch/lesson-plan",
      },
      {
        label: "Starter project",
        url: "https://example.com/intro-to-scratch/starter",
      },
    ],
    slides: [
      { label: "Slides", url: "https://example.com/intro-to-scratch/slides" },
    ],
  },
  {
    id: "w2",
    slug: "python-turtle-art",
    name: "Python Turtle Art",
    description:
      "Students write their first Python and draw shapes and patterns with the turtle module. Covers variables, loops and functions.",
    tags: ["cs", "python", "beginner", "art"],
    photos: [
      {
        src: "/workshops/placeholder-3.svg",
        alt: "Colorful spiral patterns drawn by student Python code",
      },
    ],
    materials: [
      {
        label: "Worksheet",
        url: "https://example.com/python-turtle-art/worksheet",
      },
    ],
    slides: [
      {
        label: "Part 1: Shapes",
        url: "https://example.com/python-turtle-art/slides-1",
      },
      {
        label: "Part 2: Patterns",
        url: "https://example.com/python-turtle-art/slides-2",
      },
    ],
  },
  {
    id: "w3",
    slug: "build-your-first-website",
    name: "Build Your First Website",
    description:
      "Students build a one-page site about themselves with HTML and CSS, then change colors and fonts to make it their own.",
    tags: ["cs", "web", "html", "css", "intermediate"],
    photos: [
      {
        src: "/workshops/placeholder-2.svg",
        alt: "A student showing their personal web page",
      },
      {
        src: "/workshops/placeholder-1.svg",
        alt: "HTML code on a projector screen",
      },
      {
        src: "/workshops/placeholder-3.svg",
        alt: "Students comparing their websites",
      },
    ],
    materials: [
      {
        label: "Starter files",
        url: "https://example.com/first-website/starter",
      },
      {
        label: "CSS cheat sheet",
        url: "https://example.com/first-website/css-cheat-sheet",
      },
    ],
    slides: [
      { label: "Slides", url: "https://example.com/first-website/slides" },
    ],
  },
  {
    id: "w4",
    slug: "play-dough-circuits",
    name: "Play-Dough Circuits",
    description:
      "Students light up LEDs using conductive play-dough and batteries, and learn what makes a circuit open or closed.",
    tags: ["stem", "electricity", "hands-on", "beginner"],
    photos: [
      {
        src: "/workshops/placeholder-3.svg",
        alt: "A play-dough sculpture with a glowing LED",
      },
    ],
    materials: [
      {
        label: "Supply list",
        url: "https://example.com/play-dough-circuits/supplies",
      },
      {
        label: "Dough recipe",
        url: "https://example.com/play-dough-circuits/recipe",
      },
    ],
    slides: [
      {
        label: "Slides",
        url: "https://example.com/play-dough-circuits/slides",
      },
    ],
  },
  {
    id: "w5",
    slug: "egg-drop-engineering",
    name: "Egg Drop Engineering",
    description:
      "Teams design and build a container that keeps an egg safe from a two-story drop. Covers forces, testing and improving a design.",
    tags: ["stem", "engineering", "hands-on", "teamwork"],
    photos: [
      {
        src: "/workshops/placeholder-1.svg",
        alt: "Student-built egg containers lined up before the drop",
      },
      {
        src: "/workshops/placeholder-2.svg",
        alt: "A team cheering after their egg survived",
      },
    ],
    materials: [
      {
        label: "Design worksheet",
        url: "https://example.com/egg-drop/worksheet",
      },
    ],
    slides: [],
  },
  {
    id: "w6",
    slug: "what-is-ai",
    name: "What Is AI?",
    description:
      "Students train a simple image classifier with no code and talk about where AI shows up in their lives, and where it gets things wrong.",
    tags: ["cs", "ai", "intermediate"],
    photos: [],
    materials: [
      {
        label: "Activity guide",
        url: "https://example.com/what-is-ai/activity",
      },
    ],
    slides: [{ label: "Slides", url: "https://example.com/what-is-ai/slides" }],
  },
];
