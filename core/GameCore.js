import { RandomProvider } from "./RandomProvider.js";
import { PlayRound } from "./PlayRound.js";
import { GameStats } from "./Stats.js";
import { askYesNo } from "../utils/askYesNo.js";
export class GameCore {
  constructor(args) {
    this.n = args.n;
    this.random = new RandomProvider(this.n);
    this.morty = new args.mortyClass(this.n, this.random);
this.stats = new GameStats(this.n);
    this.gameStarted = true;
  }

  async start() {
    console.log(
      `Welcome to the game! Boxes: ${this.n}, Morty: ${this.morty.constructor.name}`
    );

    while (this.gameStarted) {
      const result = await PlayRound(this.morty);
      this.stats.addResult(result);
      const input = askYesNo("👉 Do you want to play another round? (y/n): ");
      if (input === "n") {
        this.gameStarted = false;
        console.log("👋 Bye, Rick!");
        this.stats.showTable();

      }
    }
  }
}
