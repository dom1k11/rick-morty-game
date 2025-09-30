import { validateArgs } from "../utils/validateArgs.js";
import { loadMorty } from "../utils/loadMorty.js";

export class ArgsParser {
  static async parse(argv) {
    const { n, mortyPath, mortyClassName } = validateArgs(argv);
    const MortyClass = await loadMorty(mortyPath, mortyClassName);
    return { n, mortyClass: MortyClass };
  }
}
