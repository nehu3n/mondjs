import type { Result } from "../../lib/Result";
import { err, ok } from "../../lib/Result";

import type { Option } from "../../lib/Option";
import { some, none } from "../../lib/Option";

import { ERROR_MESSAGE_DIVIDE, type User } from "./defs.ts";

function divide(a: number, b: number): Result<number, string> {
  if (a === 0 || b === 0) {
    return err(ERROR_MESSAGE_DIVIDE);
  }

  return ok(a / b);
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function findUserById(id: number): Option<User> {
  const user = users.find((user) => user.id === id);

  return user ? some(user) : none();
}

export { divide, findUserById };
