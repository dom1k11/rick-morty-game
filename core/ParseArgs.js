import { mortyRegistry } from "../morties/mortyRegistry.js";
export class ArgsParser {
  constructor(argv) {
    if (argv.length < 4) {
      throw new Error("Usage: node index.js <boxes> <MortyClass>");
    }

    this.n = parseInt(argv[2], 10);
    const mortyClassName = argv[3];

    if (isNaN(this.n) || this.n < 3) {
      throw new Error("Number of boxes must be >= 3");
    }

    const mortyClass = mortyRegistry[mortyClassName];

    if (!mortyClass) {
      throw new Error(`Unknown Morty: ${mortyClassName}`);
    }

    this.mortyClass = mortyClass
  }
}
