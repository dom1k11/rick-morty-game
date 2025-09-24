import { describe, it, expect } from "vitest";
import { GameStats } from "../core/Stats.js";

describe("GameStats", () => {
  it("should count a round and win when Rick stayed on his choice", () => {
    const stats = new GameStats();
    stats.addResult({ stayed: true, win: true });
    expect(stats.winsStay).toBe(1);
    expect(stats.rounds).toBe(1);
  });
  it("should count a win when Rick switched"), () =>
  {
    const stats = new GameStats()
    stats.addResult({ stayed: false, win: true });
  }
  it("should not count a win when Rick loses", () => {
    const stats = new GameStats();
    stats.addResult({ stayed: true, win: false });
    stats.addResult({ stayed: false, win: false });
    expect(stats.winsStay).toBe(0);
    expect(stats.winsSwitch).toBe(0);
    expect(stats.rounds).toBe(2);
  });
});
