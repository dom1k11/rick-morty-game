export class ArgsParser {
  //TODO: Add morty as arg
  constructor(argv) {
    if (argv.length < 3) {
      throw new Error("Usage: node index.js <boxes>");
    }
    this.n = parseInt(argv[2], 10);
    if (isNaN(this.n) || this.n < 3) {
      throw new Error("Number of boxes must be >= 3");
    }
  }
}
