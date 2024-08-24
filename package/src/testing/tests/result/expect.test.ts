import { it, expect } from "vitest";

import { divide } from "../../shared/shared.ts";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/defs.ts";

const CUSTOM_DIVISION_ERROR = "Cannot be divided by 0.";
const CUSTOM_EXPECTED_ERR_ERROR = "Expected an error but got an Ok value";

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

it("should throw an error with a custom message when expectErr is called on an Ok instance", () => {
  const result = divide(20, 4);

  expect(() => result.expectErr(CUSTOM_EXPECTED_ERR_ERROR)).toThrowError(
    CUSTOM_EXPECTED_ERR_ERROR
  );
});

it("should return the error value when expectErr is called on an Err instance", () => {
  const result = divide(20, 0);

  expect(result.expectErr(CUSTOM_EXPECTED_ERR_ERROR)).toBe(
    ERROR_MESSAGE_DIVIDE
  );
});
