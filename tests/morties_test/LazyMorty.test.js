import { describe, it, expect } from "vitest";
import { RandomProvider } from "../../core/RandomProvider.js";
import { LazyMorty } from "../../morties/LazyMorty.js";

describe("LazyMorty", () => {
  it("should hide the portal gun in a random box", () => {
    const random = new RandomProvider(3);
    const morty = new LazyMorty(3, random);

    const hmac = morty.hidePortalGun();

    expect(typeof hmac).toBe("string");
    expect(hmac.length).toBeGreaterThan(0);
    expect(morty.gun).toBeGreaterThanOrEqual(0);
    expect(morty.gun).toBeLessThan(3);
  });
  it("should remove lowest possible box", () => {
    const random = new RandomProvider(3);
    const morty = new LazyMorty(3, random);
    morty.hidePortalGun();
    morty.gun = 2;

    const removed1 = morty.chooseBoxToRemove(0);
    expect(removed1).toBe(1);

    const removed2 = morty.chooseBoxToRemove(1);
    expect(removed2).toBe(0);

    const removed3 = morty.chooseBoxToRemove(2);
    expect(removed3).toBe(0);
  });
});
