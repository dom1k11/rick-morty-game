import readlineSync from "readline-sync";

export function askYesNo(question) {
  while (true) {
    const input = readlineSync.question(question).toLowerCase();
    if (["y", "n"].includes(input)) return input;
    console.log("❌ Invalid choice. Please type 'y' or 'n'.");
  }
}
