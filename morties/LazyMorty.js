import { AbstractMorty } from "../core/AbstractMorty.js";

export class LazyMorty extends AbstractMorty {
  hidePortalGun() {
    return this.random.generateHide();
  }

  chooseBoxToRemove(rickChoice) {
   
    let removed = null;
    for (let i = 0; i < this.n; i++) {
      if (i !== rickChoice && i !== this.random.mortyValue1) {
        removed = i;
        break;
      }
    }
    this.removedBox = removed;
    return null;  
  }

  revealAll() {
    return {
      mortyValue1: this.random.mortyValue1,
      key1: this.random.key1.toString("hex"),
      mortyValue2: null,
      key2: null,
    };
  }

  verifyAll() {
    return {
      check1: this.random.verify(
        this.random.hmac1,
        this.random.mortyValue1,
        this.random.key1.toString("hex")
      ),
      check2: null,
    };
  }
}
