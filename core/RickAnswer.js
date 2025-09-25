import readlineSync from "readline-sync";

export function RickAnswer(prompt, n) {
  while (true) {
    const input = readlineSync.question(prompt);
    const choice = parseInt(input, 10);
    if (!Number.isNaN(choice) && choice >= 0 && choice < n) {
      return choice;
    }
    console.log(Dialogs.invalidChoice(n));
  }
}
