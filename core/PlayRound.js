import { Dialogs } from "./Dialogs.js";
import { RickAnswer } from "./RickAnswer.js";
export async function PlayRound(morty) {
  const n = morty.n;
  const hmac1 = morty.hidePortalGun();
  console.log(Dialogs.mortyHide(n));
  console.log(Dialogs.mortyHmac(hmac1));

  const rickFirstChoice = RickAnswer(Dialogs.askRick(n), n);
  console.log(Dialogs.rickChoice(rickFirstChoice));

  console.log(Dialogs.mortySecondCommit());
  const hmac2 = morty.chooseBoxToRemove(rickFirstChoice);
  console.log(Dialogs.mortyHmac2(hmac2));
  console.log(Dialogs.mortyRemoves(morty.removedBox));

  const rickFinalChoice = RickAnswer(Dialogs.confirmRick(rickFirstChoice), n);
  console.log(Dialogs.rickChoice(rickFinalChoice));

  const { mortyValue1, key1, mortyValue2, key2 } = morty.revealAll();

  console.log(Dialogs.mortyReveal(mortyValue1));
  console.log(Dialogs.mortyKey(key1));
  console.log(Dialogs.mortyReveal2(mortyValue2, key2));

  const check1 = morty.random.verify(hmac1, mortyValue1, key1);
  const check2 = morty.random.verify(hmac2, mortyValue2, key2);

  console.log(Dialogs.rickCheck());
  console.log(Dialogs.rickOriginal(hmac1));
  console.log(Dialogs.rickRecalculated(check1.recalculated));
  console.log(Dialogs.rickCheck2(check2));

  if (check1.honest && check2.honest) {
    console.log(Dialogs.honest());
  } else {
    console.log(Dialogs.cheated());
  }

  if (rickFinalChoice === mortyValue1) {
    console.log(Dialogs.rickWin());
  } else {
    console.log(Dialogs.mortyWin());
  }

  const stayed = rickFinalChoice === rickFirstChoice;
  const win = rickFinalChoice === mortyValue1;
  return { stayed, win };
}
