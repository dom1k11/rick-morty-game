import crypto from "crypto";

export class RandomProvider {
  constructor(n) {
    this.n = n;
    this.mortyValue = null;
    this.key = null;
    this.hmac = null;
  }

  generateHide() {
    this.mortyValue = crypto.randomInt(0, this.n);
    this.key = crypto.randomBytes(32);
    this.hmac = crypto
      .createHmac("sha3-256", this.key)
      .update(this.mortyValue.toString())
      .digest("hex");

    return this.hmac;
  }

  revealKey() {
    return { mortyValue: this.mortyValue, key: this.key.toString("hex") };
  }

  verify(hmac, mortyValue, keyHex) {
    const recalculated = crypto
      .createHmac("sha3-256", Buffer.from(keyHex, "hex"))
      .update(mortyValue.toString())
      .digest("hex");

    return {
      recalculated,
      honest: recalculated === hmac,
    };
  }
}
