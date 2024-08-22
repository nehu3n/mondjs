import { expect, it } from "vitest";

import { findUserById } from "../../shared/shared";
import type { User } from "../../shared/defs";

const CUSTOM_FIND_ERROR = "User with the given ID was not found.";

it("should return the correct user when `expect` is called on a Some value", () => {
  const userOption = findUserById(1).expect(CUSTOM_FIND_ERROR);

  expect(userOption).toMatchObject<User>({ id: 1, name: "Alice" });
});

it("should throw a custom error when `expect` is called on a None value", () => {
  expect(() => findUserById(3).expect(CUSTOM_FIND_ERROR)).toThrowError(
    CUSTOM_FIND_ERROR
  );
});
