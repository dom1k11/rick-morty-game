import crypto from "crypto";

export class RandomProvider {
  constructor(n) {
    this.n = n;
  }

  generateHide() {
    this.mortyValue1 = crypto.randomInt(0, this.n);
    this.key1 = crypto.randomBytes(32);
    this.hmac1 = crypto
      .createHmac("sha3-256", this.key1)
      .update(this.mortyValue1.toString())
      .digest("hex");
    return this.hmac1;
  }

  generateHide2() {
    this.mortyValue2 = crypto.randomInt(0, this.n);
    this.key2 = crypto.randomBytes(32);
    this.hmac2 = crypto
      .createHmac("sha3-256", this.key2)
      .update(this.mortyValue2.toString())
      .digest("hex");
    return this.hmac2;
  }

  reveal1() {
    return { value: this.mortyValue1, key: this.key1.toString("hex") };
  }

  reveal2() {
    return { value: this.mortyValue2, key: this.key2.toString("hex") };
  }

  verify(hmac, value, keyHex) {
    const recalculated = crypto
      .createHmac("sha3-256", Buffer.from(keyHex, "hex"))
      .update(value.toString())
      .digest("hex");
    return { recalculated, honest: recalculated === hmac };
  }
}
