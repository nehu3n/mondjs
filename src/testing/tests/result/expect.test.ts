import { it, expect } from "vitest";

import { divide } from "../../shared/shared.ts";

const CUSTOM_DIVISION_ERROR = "Cannot be divided by 0.";

it("should return the value when using _expect on a successful result", () => {
  const value = divide(4, 2).expect(CUSTOM_DIVISION_ERROR);

  expect(value).toBe(2);
});

it("should throw an error with the provided message when using _expect on an error result", () => {
  const result = divide(4, 0);

  expect(() => result.expect(CUSTOM_DIVISION_ERROR)).toThrowError(
    CUSTOM_DIVISION_ERROR
  );
});
