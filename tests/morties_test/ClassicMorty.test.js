import { describe, it, expect } from "vitest";
import { RandomProvider } from "../../core/RandomProvider.js";
import { ClassicMorty } from "../../morties/ClassicMorty.js";

describe("ClassicMorty", () => {
  it("should hide the portal gun in a random box", () => {
    const random = new RandomProvider(3);
    const morty = new ClassicMorty(3, random);

    const hmac = morty.hidePortalGun();

    expect(typeof hmac).toBe("string");
    expect(hmac.length).toBeGreaterThan(0);
    expect(morty.gun).toBeGreaterThanOrEqual(0);
    expect(morty.gun).toBeLessThan(3);
  });
  it("should remove box that is not rick choice or gun", () => {
    const random = new RandomProvider(3);
    const morty = new ClassicMorty(3, random);

    morty.hidePortalGun();

    const rickChoice = 0;

    morty.chooseBoxToRemove(rickChoice);

    expect(morty.removedBox).not.toBe(rickChoice);
    expect(morty.removedBox).not.toBe(morty.gun);

    expect(morty.removedBox).toBeGreaterThanOrEqual(0);
    expect(morty.removedBox).toBeLessThan(3);
  });
});
