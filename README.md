# FirstByte Resource Hub

One place for FirstByte members to find workshops (with their photos, slides
and materials) and a log of past meetings and events: workshops, stand-ups,
GMs and FirstBites. You can browse by semester and team, and search, filter
and sort.

**Goal:** a working full-stack version by **December 11, 2026**. The work is
split into three sprints. See the milestones and the project board on GitHub.

| Sprint   | Ends   | Focus                                                  |
| -------- | ------ | ------------------------------------------------------ |
| Sprint 1 | Nov 18 | Front end: pages and components on dummy data          |
| Sprint 2 | Dec 2  | Back end: Supabase, sign-in, search/filter/sort, edits |
| Sprint 3 | Dec 11 | Polish: empty and loading states, phones, bug fixes    |

**Owner:** the website team lead (currently [@hecbatista](https://github.com/hecbatista)).
Ask them before changing the template itself.

## What's inside

| Tool                                            | What it does                                                       |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| [Next.js](https://nextjs.org/docs) (App Router) | The framework: pages, routing, server code                         |
| [TypeScript](https://www.typescriptlang.org/)   | JavaScript with types, so mistakes show up before you run the code |
| [Tailwind CSS](https://tailwindcss.com/docs)    | Styling with class names                                           |
| [shadcn/ui](https://ui.shadcn.com)              | Ready-made components (buttons, cards, forms)                      |
| [Vitest](https://vitest.dev)                    | Tests                                                              |
| ESLint and Prettier                             | Find code problems, and format code the same way for everyone      |
| [pnpm](https://pnpm.io)                         | Installs packages. **Use pnpm, never npm or yarn.**                |

There is no database or login built in. Each project picks its own. See
[Guides](#guides).

## First day

You do this once on your computer.

1. **Install Node.js 24 with nvm.** nvm lets you switch Node versions per
   project. Install it from [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#installing-and-updating),
   then, in this folder:

   ```bash
   nvm install
   ```

   This reads `.nvmrc` and installs the right version. Next time, run
   `nvm use` in this folder.

2. **Turn on pnpm.** Node comes with a tool called corepack that installs the
   exact pnpm version this project uses:

   ```bash
   corepack enable
   ```

3. **Install the packages:**

   ```bash
   pnpm install
   ```

4. **Copy the example settings file.** `.env.local` holds settings and secrets
   for your computer only. Git ignores it, so it is never committed.

   ```bash
   cp .env.example .env.local
   ```

5. **Start the app:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000). When you save a file,
   the page updates by itself.

6. **Install the VS Code extensions.** When you open this folder in VS Code,
   it asks you to install the recommended extensions (ESLint, Prettier,
   Tailwind CSS IntelliSense, Claude Code). Click **Install**. Your code is then
   formatted every time you save.

Then read [CONTRIBUTING.md](CONTRIBUTING.md) to see how we make changes.

## Commands

| Command          | What it does                                                         |
| ---------------- | -------------------------------------------------------------------- |
| `pnpm dev`       | Runs the app at http://localhost:3000                                |
| `pnpm test`      | Runs the tests once. `pnpm test:watch` runs them again on every save |
| `pnpm lint`      | Finds code problems. Zero warnings allowed                           |
| `pnpm typecheck` | Finds type errors                                                    |
| `pnpm format`    | Formats every file. `pnpm format:check` only checks                  |
| `pnpm build`     | Makes the production build, the same way Vercel does                 |

CI runs `format:check`, `lint`, `typecheck`, `test` and `build` on every pull
request. If one fails, the pull request can't merge. Run them yourself before
you push to find problems early.

## Where things go

```
src/
  app/              Pages. A folder is a URL: src/app/about/page.tsx is /about
    layout.tsx      The wrapper around every page (fonts, page title)
    icon.png        The icon in the browser tab
    page.tsx        The home page (/)
    globals.css     Tailwind and the theme colors
    workshops/      /workshops
    events/         /events
  components/
    ui/             shadcn components. Add more with: pnpm dlx shadcn@latest add <name>
                    (for example: pnpm dlx shadcn@latest add dialog)
                    Try not to edit these by hand.
    ...             Your own components go here, next to ui/
  lib/              Helpers that are not components
    data/           Our data: types, dummy data and the functions to get it
public/             Images and files served as they are (public/firstbyte-logo.png is /firstbyte-logo.png)
docs/guides/        How to add a database, login and other things
```

Tests go next to the file they test: `semester.ts` and `semester.test.ts`.

## The data

There are two kinds of things. Their types are in
[`src/lib/data/types.ts`](src/lib/data/types.ts).

- **Workshop:** teaching content we can run again and again. It has a name, a
  description, free tags (like `cs`, `stem`, `python`, `beginner`), photos,
  materials links and slides links. Each one has its own page at
  `/workshops/<slug>`.
- **ClubEvent:** something that happened on a date: a workshop session, a
  stand-up, a GM or a FirstBite. It belongs to one team, or is club-wide. A
  workshop session can point at the Workshop it ran. The semester (like
  "Fall 2026") is worked out from the date by
  [`getSemester`](src/lib/data/semester.ts).

**Get data only through the functions in
[`src/lib/data/index.ts`](src/lib/data/index.ts)**, for example
`await getWorkshops()`. Don't import the files in `src/lib/data/dummy/`
directly. For now the functions read dummy data. In Sprint 2 they will read
from Supabase, and because pages only use the functions, the pages won't need
to change.

The dummy photos are placeholders in `public/workshops/`. The dummy links all
point at `example.com`.

## Guides

How to add things this template leaves out on purpose:

- [Supabase](docs/guides/supabase.md): database, login, and preview and
  production databases

Using something else (Firebase, Convex, Neon)? Write a guide for it in
`docs/guides/` once you've set it up, so the next project can follow it.

## Claude Code skills

The repo comes with a few skills in [`.claude/skills/`](.claude/skills/README.md),
so everyone who uses Claude Code here gets them.

### Optional skills

These are useful but not required. They come from Matt Pocock's skills
plugin. To install it, run this inside Claude Code:

```
/plugin install mattpocock-skills@claude-plugins-official
```

The plugin adds about 38 skills. The ones worth knowing first:

| Skill              | Type it when you want to...                               |
| ------------------ | --------------------------------------------------------- |
| `/grill-me`        | Have Claude question you about a plan before you build it |
| `/diagnosing-bugs` | Find the cause of a bug step by step, not by guessing     |
| `/teach`           | Learn a concept using the code in this repo               |
| `/wait-what`       | Hear the last answer again, more simply                   |

To turn the plugin off later, open `/plugin`, select it on the **Installed**
tab, and choose **Disable plugin**.

## Deploying

The app runs on [Vercel](https://vercel.com). Every pull request gets its own
preview link, and merging to `main` updates the live site. A lead sets this
up once. See [SETUP.md](SETUP.md).

## Keeping the template up to date

Dependabot opens a pull request each week with package updates. CI checks
each one. If CI passes, the owner merges it. Major updates come one at a
time, so read their release notes before you merge.
