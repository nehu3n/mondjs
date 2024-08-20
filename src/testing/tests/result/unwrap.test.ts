import { it, expect } from "vitest";
import { unwrap } from "../../../lib/Result";

import { divide } from "../../shared/shared.ts";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/consts.ts";

it("should unwrap Ok result correctly", () => {
  const result = divide(4, 2);
  const value = unwrap(result);

  expect(value).toBe(2);
});

it("should throw an error when unwrapping an Err result", () => {
  const result = divide(4, 0);
  expect(() => unwrap(result)).toThrowError(ERROR_MESSAGE_DIVIDE);
});
