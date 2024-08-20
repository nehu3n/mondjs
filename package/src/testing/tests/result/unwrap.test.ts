import { it, expect } from "vitest";

import { divide } from "../../shared/shared.ts";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/consts.ts";

it("should unwrap Ok result correctly", () => {
  const value = divide(4, 2).unwrap();

  expect(value).toBe(2);
});

it("should throw an error when unwrapping an Err result", () => {
  const result = divide(4, 0);
  expect(() => result.unwrap()).toThrowError(ERROR_MESSAGE_DIVIDE);
});
