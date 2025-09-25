import { AbstractMorty } from "../core/AbstractMorty.js";

export class LazyMorty extends AbstractMorty {
  constructor(n, random) {
    super(n, random);
    this.hmac1 = null;
    this.gun = null;
    this.removedBox = null;
  }

  hidePortalGun() {
    this.hmac1 = this.random.generateHide();
    this.gun = this.random.mortyValue1;
    return this.hmac1;
  }

  chooseBoxToRemove(rickChoice) {
    for (let i = 0; i < this.n; i++) {
      if (i !== rickChoice && i !== this.gun) {
        this.removedBox = i;
        break;
      }
    }
  return this.removedBox; 
  }

  revealAll() {
    return {
      mortyValue1: this.random.mortyValue1,
      key1: this.random.key1.toString("hex"),
      mortyValue2: null,
      key2: null,
      gun: this.gun,
      removed: this.removedBox,
    };
  }

  verifyAll() {
    const check1 = this.random.verify(
      this.hmac1,
      this.random.mortyValue1,
      this.random.key1.toString("hex")
    );
    return { check1, check2: null };   }
}
