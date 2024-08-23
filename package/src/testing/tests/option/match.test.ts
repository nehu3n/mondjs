import { it, expect } from "vitest";

import { findUserById } from "../../shared/shared";

it("should match Some result correctly", () => {
  const result = findUserById(2);

  const matched = result.match({
    Some: (value) => `User is ${value.name}`,
    None: () => "Should not be called",
  });

  expect(matched).toBe("User is Bob");
});

it("should match None result correctly", () => {
  const result = findUserById(3);

  const matched = result.match({
    Some: (_) => "Should not be called",
    None: () => "None called.",
  });

  expect(matched).toBe("None called.");
});
