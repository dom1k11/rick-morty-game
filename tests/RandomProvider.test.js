import { describe, it, expect } from "vitest";
import { RandomProvider } from "./core/RandomProvider.js";

describe("RandomProvider", () => {
  it("should generate valid HMAC and verify it", () => {
    const random = new RandomProvider(10);

    const hmac = random.generateHide();
    expect(typeof hmac).toBe("string");
    expect(hmac.length).toBeGreaterThan(0);

    const { value: mortyValue, key } = random.reveal1();
    expect(typeof mortyValue).toBe("number");
    expect(typeof key).toBe("string");

    const { recalculated, honest } = random.verify(hmac, mortyValue, key);
    expect(recalculated).toBe(hmac);
    expect(honest).toBe(true);
  });

  it("should fail verification if the key is wrong", () => {
    const random = new RandomProvider(5);
    const hmac = random.generateHide();
    const { value: mortyValue } = random.reveal1();

    const wrongKey = "00".repeat(32);
    const { honest } = random.verify(hmac, mortyValue, wrongKey);
    expect(honest).toBe(false);
  });

  it("should fail verification with wrong mortyValue", () => {
    const random = new RandomProvider(5);
    const hmac = random.generateHide();
    const { key, value: correctValue } = random.reveal1();

    const wrongValue = correctValue + 1;
    const { honest } = random.verify(hmac, wrongValue, key);

    expect(honest).toBe(false);
  });
});
