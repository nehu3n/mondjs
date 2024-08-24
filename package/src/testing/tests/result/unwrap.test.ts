import { it, expect } from "vitest";

import { divide } from "../../shared/shared.ts";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/defs.ts";

it("should unwrap Ok result correctly", () => {
  const value = divide(4, 2).unwrap();

  expect(value).toBe(2);
});

it("should throw an error when unwrapping an Err result", () => {
  const result = divide(4, 0);
  expect(() => result.unwrap()).toThrowError(ERROR_MESSAGE_DIVIDE);
});

it("should throw an error when unwrapErr is called on an Ok instance", () => {
  const result = divide(10, 2);

  expect(() => result.unwrapErr()).toThrowError(
    "Tried to 'unwrapErr' an Ok value: 5"
  );
});

it("should return the error value when unwrapErr is called on an Err instance", () => {
  const result = divide(4, 0);

  expect(result.unwrapErr()).toBe(ERROR_MESSAGE_DIVIDE);
});
