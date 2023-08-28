import { describe, expect, it } from 'vitest';
import { generateSellerId } from "./event";

describe("generateSellerId", () => {
  it.each([
    [0, 'A-01'],
    [1, 'B-01'],
    [2, 'C-01'],
    [3, 'E-01'],
    [4, 'F-01'],
    [5, 'G-01'],
    [6, 'H-01'],
    [7, 'J-01'],
    [8, 'K-01'],
    [9, 'L-01'],
    [10, 'M-01'],
    [11, 'N-01'],
    [12, 'O-01'],
    [13, 'P-01'],
    [14, 'R-01'],
    [15, 'S-01'],
    [16, 'T-01'],
    [17, 'V-01'],
    [18, 'X-01'],
    [19, 'Z-01'],
    [20, 'A-03'],
    [21, 'B-03'],
    [22, 'C-03']
  ])("should transform %i to %s", async (x, expected) => {
    expect(generateSellerId(x)).toBe(expected);
  })
})