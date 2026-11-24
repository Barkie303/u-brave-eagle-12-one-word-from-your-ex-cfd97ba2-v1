// One Word From Your Ex — entry for make.fun
// u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
// Writes exactly one word (1-24 chars): the word my ex would use
// to describe me, to /output/entry.txt. Nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// The word: placeholder. My ex would not call me toxic or a liar —
// she would call me the guy who was only ever keeping the seat warm
// until someone better came along. It stings because it is true, and
// the joke is that I knew it at the time too. One word, no alibi.
// A placeholder never gets a second season; that is the whole point.
const WORD = "placeholder";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
