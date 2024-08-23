import { it, expect } from "vitest";

import { divide } from "../../shared/shared";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/defs";

it("should return a number when dividing by a non-zero value", () => {
  const [result, error] = divide(4, 2).unpack(); // [result = 2, error = null]
  expect(result).toBeTypeOf("number");
});

it("should return null as result when dividing by zero", () => {
  const [result, error] = divide(4, 0).unpack(); // [result = null, error = "Division by zero."]
  expect(result).toBeNull();
});

it("should return an error message when dividing by zero", () => {
  const [result, error] = divide(4, 0).unpack(); // [result = null, error = "Division by zero."]
  expect(error).toBeTypeOf("string");
});

it("should return null as error when dividing by a non-zero value", () => {
  const [result, error] = divide(4, 2).unpack(); // [result = 2, error = null];

  expect(error).toBeNull();
});

it("should return an error when dividing by zero", () => {
  const [result, error] = divide(4, 0).unpack(); // [result = null, error = "Division by zero."]

  expect(error).toBe(ERROR_MESSAGE_DIVIDE);
});
