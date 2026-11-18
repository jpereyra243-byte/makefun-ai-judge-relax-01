import * as fs from "fs";
import * as path from "path";

function main() {
  const outDir = "/output";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const text =
    "You are eight years old again, asleep against the cold glass of the backseat while gravel turns softly into the driveway. " +
    "The engine clicks off into silence. You hear the front door unlock across the dark, and then two strong arms scoop you up into the sharp night air. " +
    "Your head drops into the heavy wool of a coat that smells of cedar and winter rain. You don't have to wake up. You don't have to walk. " +
    "You are carried up the creaking stairs in the dark, through the warm quiet of the house, and laid down into a deep mattress beneath three layered quilts. " +
    "Your shoes slip off, the heavy blankets pull up to your chin, and the door clicks shut behind them. " +
    "Outside, the steady rhythm of rain on the tin roof washes away every sound. " +
    "Nothing is due. Nobody is waiting. You are completely safe, deeply warm, and fast asleep.";

  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf-8");
}

main();
