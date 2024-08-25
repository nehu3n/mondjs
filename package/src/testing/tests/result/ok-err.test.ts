import { it, expect } from "vitest";

import { divide } from "../../shared/shared";

// .ok();

it("should return Some when divide result is Ok", () => {
  const result = divide(10, 2).ok();

  expect(result.isSome()).toBe(true);
  expect(result.unwrap()).toBe(5);
});

it("should return None when divide result is Err", () => {
  const result = divide(10, 0).ok();

  expect(result.isNone()).toBe(true);
});

// .err();

it("should return Some with error message when divide result is Err", () => {
  const result = divide(10, 0).err();

  expect(result.isSome()).toBe(true);
  expect(result.unwrap()).toBe("Division by zero.");
});

it("should return None when divide result is Ok", () => {
  const result = divide(10, 2).err();

  expect(result.isNone()).toBe(true);
});
