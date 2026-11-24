// The Dream Podcast Pillow — one-sentence absurd invention pitch.
// A pillow that records your dreams and plays them back as a podcast
// every morning, fixing the tiny annoyance of forgetting your dreams.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "A pillow that records your dreams and plays them back as a podcast every morning.";

// One sentence, 1–220 characters, never only whitespace.
if (pitch.length < 1 || pitch.length > 220 || !pitch.trim()) {
  throw new Error("pitch must be one sentence of 1–220 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(pitch);
