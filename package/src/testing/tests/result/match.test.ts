import { it, expect } from "vitest";

import { divide } from "../../shared/shared";
import { ERROR_MESSAGE_DIVIDE } from "../../shared/consts";

it("should match Ok result correctly", () => {
  const result = divide(20, 2);

  const matched = result.match({
    Ok: (value) => `Value is ${value}`,
    Error: () => "Should not be called",
  });

  expect(matched).toBe("Value is 10");
});

it("should match Err result correctly", () => {
  const result = divide(10, 0);

  const matched = result.match({
    Ok: () => "Should not be called",
    Error: (error) => `Error occurred: ${error}`,
  });

  expect(matched).toBe(`Error occurred: ${ERROR_MESSAGE_DIVIDE}`);
});
