import { Dialogs } from "./Dialogs.js";
import { RickAnswer } from "./RickAnswer.js";

export async function PlayRound(n, random) {
  //Morty hides portal gun
  const hmac1 = random.generateHide();
  console.log(Dialogs.mortyHide(n));
  console.log(Dialogs.mortyHmac(hmac1));

  //Ask for choice
  const rickFirstChoice = RickAnswer(Dialogs.askRick(n), n);
  console.log(Dialogs.rickChoice(rickFirstChoice));

  //Fake hide
  console.log(Dialogs.mortySecondCommit());
  const hmac2 = random.generateHide2();
  console.log(Dialogs.mortyHmac2(hmac2));

  const gun = random.mortyValue1;
  //Remove box
  let removedBox = random.mortyValue2;
  if (removedBox === rickFirstChoice || removedBox === gun) {
    for (let i = 0; i < n; i++) {
      if (i !== rickFirstChoice && i !== gun) {
        removedBox = i;
        break;
      }
    }
  }
  console.log(Dialogs.mortyRemoves(removedBox));
  //Ask for choice again
  const rickFinalChoice = RickAnswer(Dialogs.confirmRick(rickFirstChoice), n);
  console.log(Dialogs.rickChoice(rickFinalChoice));

  const { value: mortyValue1, key: key1 } = random.reveal1();
  const { value: mortyValue2, key: key2 } = random.reveal2();

  console.log(Dialogs.mortyReveal(mortyValue1));
  console.log(Dialogs.mortyKey(key1));
  console.log(Dialogs.mortyReveal2(mortyValue2, key2));

  //Check if HMAC is not changed
  const check1 = random.verify(hmac1, mortyValue1, key1);
  const check2 = random.verify(hmac2, mortyValue2, key2);
  console.log(Dialogs.rickCheck());
  console.log(Dialogs.rickOriginal(hmac1));
  console.log(Dialogs.rickRecalculated(check1.recalculated));
  console.log(Dialogs.rickCheck2(check2));

  if (check1.honest && check2.honest) {
    console.log(Dialogs.honest());
  } else {
    console.log(Dialogs.cheated());
  }

  //Results
  if (rickFinalChoice === mortyValue1) {
    console.log(Dialogs.rickWin());
  } else {
    console.log(Dialogs.mortyWin());
  }
}
