import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const mortyDir = path.resolve("./morties");

export const mortyRegistry = {};

async function loadMorties() {
  for (const file of fs.readdirSync(mortyDir)) {
    if (file.endsWith("Morty.js")) {
      const absPath = path.join(mortyDir, file);
      const modulePath = pathToFileURL(absPath).href;

      const module = await import(modulePath);

      const className = path.basename(file, ".js");
      const MortyClass = module[className];
      if (MortyClass) {
        mortyRegistry[className] = MortyClass;
      }
    }
  }
}

await loadMorties();
