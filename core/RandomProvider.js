import crypto from "crypto";

export class RandomProvider {
  constructor(n) {
    this.n = n;
  }

  generateHide() {
    this.mortyValue = crypto.randomInt(0, this.n);
    this.key = crypto.randomBytes(32);
    this.hmac = crypto
      .createHmac("sha3-256", this.key)
      .update(this.mortyValue.toString())
      .digest("hex");

    console.log("key:", this.key.toString("hex"));
    console.log("hmac:", this.hmac);
    console.log("Gun Hidden in", this.mortyValue);

    return this.hmac;
  }
}
