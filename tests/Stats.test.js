import { describe, it, expect } from "vitest";
import { GameStats } from "../core/Stats.js";

describe("GameStats", () => {
  it("should count a round and win when Rick stayed on his choice", () => {
    const stats = new GameStats(3);
    stats.addResult({ stayed: true, win: true });
    expect(stats.winsStay).toBe(1);
    expect(stats.rounds).toBe(1);
  });

  it("should count a win when Rick switched", () => {
    const stats = new GameStats(3);
    stats.addResult({ stayed: false, win: true });
    expect(stats.winsSwitch).toBe(1);
    expect(stats.rounds).toBe(1);
  });

  it("should not count a win when Rick loses", () => {
    const stats = new GameStats(3);
    stats.addResult({ stayed: true, win: false });
    stats.addResult({ stayed: false, win: false });
    expect(stats.winsStay).toBe(0);
    expect(stats.winsSwitch).toBe(0);
    expect(stats.rounds).toBe(2);
  });

  it("should calculate correct estimates", () => {
    const stats = new GameStats(3);
    stats.addResult({ stayed: true, win: true });
    stats.addResult({ stayed: true, win: false });
    stats.addResult({ stayed: false, win: true });

    const estStay = (stats.winsStay / stats.roundsStay).toFixed(3);
    const estSwitch = (stats.winsSwitch / stats.roundsSwitch).toFixed(3);

    expect(estStay).toBe("0.500"); 
    expect(estSwitch).toBe("1.000");
  });
});
