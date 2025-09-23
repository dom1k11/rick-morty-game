export class GameCore {
  constructor(args) {
    this.n = args.n;
    this.mortyClassName = "Default morty";
  }
  async start() {
    console.log(
      `Welcome to the game! Boxes: ${this.n}, Morty: ${this.mortyClassName}`
      
    );
  }
}
