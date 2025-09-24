import { describe, it, expect } from "vitest";
import { ArgsParser } from "../core/ParseArgs.js";

describe("ArgsParser", () => {
  it("should parse valid args", () => {
    const parser = new ArgsParser(["node", "index.js", "3", "ClassicMorty"]);
    expect(parser.n).toBe(3);
    expect(parser.mortyClass).toBeDefined();
  });

  it("should throw if not enough arguments", () => {
    expect(() => new ArgsParser(["node", "index.js", "3"]))
      .toThrow("Usage: node index.js <boxes> <MortyClass>");
  });

  it("should throw if boxes is not a number", () => {
    expect(() => new ArgsParser(["node", "index.js", "abc", "ClassicMorty"]))
      .toThrow("Number of boxes must be >= 3");
  });

  it("should throw if boxes < 3", () => {
    expect(() => new ArgsParser(["node", "index.js", "2", "ClassicMorty"]))
      .toThrow("Number of boxes must be >= 3");
  });

  it("should throw if Morty class is unknown", () => {
    expect(() => new ArgsParser(["node", "index.js", "3", "EvilMorty"]))
      .toThrow("Unknown Morty: EvilMorty");
  });
});
