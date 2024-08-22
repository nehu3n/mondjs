import { it, expect } from "vitest";

import type { User } from "../../shared/defs";
import { findUserById } from "../../shared/shared";

it("should return the user with ID 2 and ensure the name is 'Bob'", () => {
  const userOption = findUserById(2).unwrap();

  expect(userOption).toMatchObject<User>({ id: 2, name: "Bob" });
});

it("should throw an error when unwrap is called on a None value", () => {
  expect(() => findUserById(4).unwrap()).toThrowError(
    "Called unwrap on a None value."
  );
});

it("should return the default user when the user with ID 3 is not found", () => {
  const defaultUser: User = { id: 3, name: "Jhon" };
  const userOption = findUserById(3).unwrapOr(defaultUser);

  expect(userOption).toMatchObject<User>(defaultUser);
});
