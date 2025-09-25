export const Dialogs = {
  mortyHide: (n) =>
    `🤖 Morty: Oh geez, Rick, I hid your portal gun in one of the ${n} boxes 📦`,
  mortyHmac: (hmac) =>
    `🤖 Morty: Just to make you sure that I do not lie! 🔒 HMAC1:${hmac}`,
  askRick: (n) =>
    `Morty: Rick, enter your number [0,${n}) so you don't whine later that I cheated, okay?! `,
  confirmRick: (input) =>
    `Morty: Are you sure you want to stick with ${input}? Type the same or another! `,
  mortySecondCommit: () =>
    "🤖 Morty: Let’s generate another value now to select a box to remove. 🎲",
  mortyHmac2: (hmac) => `🤖 Morty: Here it is: 🔒 HMAC2:${hmac}`,
  mortyRemoves: (box) => `🤖 Morty removes box: ❌ ${box}`,
  mortyReveal: (value) =>
    `🤖 Morty: Rick, my random selected number is ${value} 🎲`,
  mortyKey: (key) => `🤖 Morty: Okay, Ughmm...Here is the key! 🔑 ${key}`,
  mortyReveal2: (value, key) =>
    `🤖 Morty: And also my 2nd value is ${value}, key: 🔑 ${key}`,
  rickChoice: (choice) => `🧪 Rick: I choose ${choice}`,
  rickCheck: () => "🧪 Rick: Let's check it myself... 🔍",
  rickOriginal: (hmac) => `🧪 Rick: Original HMAC was    ${hmac}`,
  rickRecalculated: (hmac) => `🧪 Rick: Recalculated HMAC is ${hmac}`,
  rickCheck2: (check) =>
    `🧪 Rick: HMAC2 recalculated = ${check.recalculated} (${
      check.honest ? "✅ OK" : "❌ FAIL"
    })`,
  honest: () =>
    "✅ Morty was honest!\n😅 Rick: Yeah... You are not cheating Morty...",
  cheated: () => "❌ Morty cheated!\n😡 Rick: Ha! They don’t match, you liar!",
  rickWin: () => "🎉 Rick: Ha Ha! Morty! You Loser! I won!!!! 🏆",
  mortyWin: () => "😎 Morty: Yeeeeeeeeeeah!!! You lost Rick! 💥",
  invalidChoice: (n) =>
    `❌ Invalid choice. Please enter a number between 0 and ${n - 1}.`,
};
