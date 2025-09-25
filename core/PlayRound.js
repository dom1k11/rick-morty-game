import { RickAnswer } from "./RickAnswer.js";

export async function PlayRound(morty) {
  const n = morty.n;

  const hmac1 = morty.hidePortalGun();
  console.log(
    `Morty: Oh geez, Rick, I'm gonna hide your portal gun in one of the ${n} boxes, okay?`
  );
  console.log(`Morty: HMAC1=${hmac1}`);

  const rickSeed = RickAnswer(
    `Morty: Rick, enter your number [0,${n}) so you don't whine later that I cheated, alright? `,
    n
  );
  console.log(`Rick: ${rickSeed}`);

  const rickFirstChoice = RickAnswer(
    `Morty: Okay, okay, I hid the gun. What's your guess [0,${n})? `,
    n
  );
  console.log(`Rick: ${rickFirstChoice}`);

  console.log(
    "Morty: Let’s, uh, generate another value now, I mean, to select a box to keep in the game."
  );
  const hmac2 = morty.chooseBoxToRemove(rickFirstChoice);
  console.log(`Morty: HMAC2=${hmac2}`);

  console.log(
    `Morty: Rick, enter your number [0,${
      n - 1
    }), and, uh, don't say I didn't play fair, okay?`
  );
  const rickSeed2 = RickAnswer("", n - 1);
  console.log(`Rick: ${rickSeed2}`);

  console.log(
    `Morty: I'm keeping the box you chose, I mean ${rickFirstChoice}, and the box ${morty.removedBox}.`
  );
  const rickFinalChoice = RickAnswer(
    `Morty: You can switch your box (enter ${morty.removedBox}), or, you know, stick with it (enter ${rickFirstChoice}). `,
    n
  );
  console.log(`Rick: ${rickFinalChoice}`);

  const { mortyValue1, key1, mortyValue2, key2 } = morty.revealAll();

  console.log(`Morty: Aww man, my 1st random value is ${mortyValue1}.`);
  console.log(`Morty: KEY1=${key1}`);
  console.log(
    `Morty: So the 1st fair number is (${rickSeed} + ${mortyValue1}) % ${n} = ${
      (mortyValue1 + rickSeed) % n
    }.`
  );

  if (mortyValue2 !== null && key2 !== null) {
    console.log(`Morty: Aww man, my 2nd random value is ${mortyValue2}.`);
    console.log(`Morty: KEY2=${key2}`);
    console.log(
      `Morty: Uh, okay, the 2nd fair number is (${rickSeed2} + ${mortyValue2}) % ${
        n - 1
      } = ${(mortyValue2 + rickSeed2) % (n - 1)}`
    );
  }

  console.log(
    `Morty: You portal gun is in the box ${(mortyValue1 + rickSeed) % n}.`
  );

  if (rickFinalChoice === (mortyValue1 + rickSeed) % n) {
    console.log("Rick: Ha Ha! Morty! You Loser! I won!!!!");
  } else {
    console.log(
      "Morty: Aww man, you lost, Rick. Now we gotta go on one of *my* adventures!"
    );
  }

  const stayed = rickFinalChoice === rickFirstChoice;
  const win = rickFinalChoice === (mortyValue1 + rickSeed) % n;
  return { stayed, win };
}
