import { AbstractMorty } from "../core/AbstractMorty.js";

export class EvilMorty extends AbstractMorty {
  constructor(n, random) {
    super(n, random);
    this.hmac1 = null;
    this.hmac2 = null;
    this.gun = null;
    this.removedBox = null;
  }

  hidePortalGun() {
    this.hmac1 = this.random.generateHide();
    this.gun = this.random.mortyValue1;
    return this.hmac1;
  }

  chooseBoxToRemove(rickChoice) {
    this.hmac2 = this.random.generateHide2(); 
    this.removedBox = this.gun; //acts like ClassicMorty, expect always removes box with the gun

    return this.hmac2;
  }

  revealAll() {
    return {
      mortyValue1: this.random.mortyValue1,
      key1: this.random.key1.toString("hex"),
      mortyValue2: this.random.mortyValue2,
      key2: this.random.key2.toString("hex"),
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
    const check2 = this.random.verify(
      this.hmac2,
      this.random.mortyValue2,
      this.random.key2.toString("hex")
    );

    return { check1, check2 };
  }
}
