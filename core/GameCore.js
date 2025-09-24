import readlineSync from "readline-sync";
import { RandomProvider } from "./RandomProvider.js";
import { PlayRound } from "./PlayRound.js";

export class GameCore {
  constructor(args) {
    this.n = args.n;
    this.mortyClassName = args.mortyClassName;
    this.random = new RandomProvider(this.n);
    this.gameStarted = true;
  }

  async start() {
    console.log(
      `Welcome to the game! Boxes: ${this.n}, Morty: ${this.mortyClassName}`
    );

    while (this.gameStarted) {
      await PlayRound(this.n, this.random);

      let input;
      while (true) {
        input = readlineSync.question(
          "👉 Do you want to play another round? (y/n): "
        );
        if (["y", "n"].includes(input.toLowerCase())) break;
        console.log("❌ Invalid choice. Please type 'y' or 'n'.");
      }

      if (input.toLowerCase() === "n") {
        this.gameStarted = false;
        console.log("👋 Bye, Rick!");
      }
    }
  }
}
