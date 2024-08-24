import { it, expect } from "vitest";

import { divide } from "../../shared/shared";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/defs";

it("should multiply the correct division result by 3", () => {
  const result = divide(10, 2).map((value) => value * 3); // 10 / 2 = 5; 5 * 3 = 15

  expect(result.unwrap()).toBe(15);
});

it("should throw an error when dividing by zero", () => {
  const result = divide(14, 0).map((value) => value * 5); // 14 / 0 = Error

  expect(() => result.unwrap()).toThrowError(ERROR_MESSAGE_DIVIDE);
});
