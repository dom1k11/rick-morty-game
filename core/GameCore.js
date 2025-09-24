import { RandomProvider } from "./RandomProvider.js";
import readlineSync from "readline-sync";

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
    const hmac = random.generateHide();

    console.log(
      `Morty: Oh geez, Rick, I hid your portal gun in one of the ${this.n} boxes`
    );
    console.log("Morty: Just to make you sure that I do not lie!", hmac);

    const input = readlineSync.question(
      `Morty: Rick, enter your number [0,${this.n}) so you don't whine later that I cheated, okay?! `
    );
    console.log(`Rick: ${input}`);

    const input2 = readlineSync.question(
      `Morty: Are you sure you want to stick with ${input}? Type the same or another! `
    );
    console.log(`Rick: ${input2}`);

    const { mortyValue, key } = random.revealKey();
    console.log(`Morty: Rick, my random selected number is ${mortyValue}`);
    console.log("Morty: Okay, Ughmm...Here is the key!", key);

    const { recalculated, honest } = random.verify(hmac, mortyValue, key);

    console.log("Rick: Let's check it myself...");
    console.log("Rick: Original HMAC was    ", hmac);
    console.log("Rick: Recalculated HMAC is", recalculated);

    if (honest) {
      console.log("✅ Morty was honest!");
      console.log("Rick: Yeah... You were right, Morty...");
    } else {
      console.log("❌ Morty cheated!");
      console.log("Rick: Ha! They don’t match, you liar!");
    }

    if (parseInt(input2) === mortyValue) {
      console.log("Rick: Ha Ha! Morty! You Loser! I won!!!!");
    } else {
      console.log("Morty: Yeeeeeeeeeeah!!! You lost Rick!");
    }
  }
}
