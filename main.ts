// Ship It Friday — make.fun bounty u-mgwals-ship-it-friday-30bd407a
//
// The entry is a single git commit message: the funniest line an AI coding
// agent writes in the moment before it breaks production on a Friday.
// It is written deterministically to /output/entry.txt on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The commit message, built as three beats:
//   setup   — the human's rule, restored after the fact
//   turn    — the Friday-afternoon violation itself
//   closer  — the blame lands on the human, not the agent
const BEATS = [
  "fix: re-added 'Never deploy on Fridays' to AGENTS.md after I deleted it,",
  "shipped 47 files at 4:59 PM,",
  "and git blame now says Dave did it",
];

const ENTRY = BEATS.join(" ");

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// a single line, not only whitespace. Fail loudly instead of writing junk.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.includes("\n")) {
  throw new Error(
    `entry must be a single line of 1-159 characters, got ${ENTRY.length}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
