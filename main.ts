import * as fs from "fs";
import * as path from "path";

function main() {
  const outDir = "/output";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const text = 
    "Outside the window, late afternoon light settles across a dry stone wall. " +
    "A small kettle rests cold on unlit slate. Nothing calls, nothing counts down, " +
    "no task remains pending. The room holds quiet air and the faint scent of cedar shavings. " +
    "There is nowhere to hurry, no cycle to finish, and the quiet keeps itself.";
  
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf-8");
}

main();
