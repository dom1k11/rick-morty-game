import { RandomProvider } from "./RandomProvider.js";

export class GameCore {
  constructor(args) {
    this.n = args.n;
    this.mortyClassName = args.mortyClassName;
  }
  async start() {
    console.log(
      `Welcome to the game! Boxes: ${this.n}, Morty: ${this.mortyClassName}`
    );

    const random = new RandomProvider(this.n);
    random.generateHide();
  }
}
