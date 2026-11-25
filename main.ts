// delete-word-01 — entry for "The Word You'd Delete From the Dictionary"
// (make.fun bounty u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
//
// The word to erase: "irregardless" — a double negative pretending to be a
// word while "regardless" already does the entire job. Deleting it costs the
// language nothing and saves everyone from hearing it ever again.
//
// The word is composed from its parts so the program shows its work: the
// redundant negative prefix "ir-" bolted onto "regardless", the word that
// already meant the whole thing. The gate allows 1-77 UTF-8 characters and
// the judge wants exactly one word, so the program validates the result is
// a single lowercase word before writing it.

import { mkdirSync, writeFileSync } from "node:fs";

const PREFIX = "ir";
const ROOT = "regardless";

const entry = (PREFIX + ROOT).toLowerCase();

if (!/^[a-z]+$/.test(entry) || entry.length < 1 || entry.length > 77) {
  throw new Error(`entry failed validation: ${JSON.stringify(entry)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars: ${entry}`);
