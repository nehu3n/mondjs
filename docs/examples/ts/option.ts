import { type Option, some, none } from "mondjs";

/**
 * Option<Type>
 *
 * The Option type represents an optional value: every Option is either Some and contains a value, or None, and does not.
 * This can be useful to represent a value that may or may not be present.
 */
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

/**
 * This function attempts to find a user by their ID.
 * If the user is found, it returns Some(user); otherwise, it returns None.
 */
function findUserById(id: number): Option<User> {
  const user = users.find((user) => user.id === id);
  return user ? some(user) : none();
}

// Example: Finding a user that exists
const userOption1 = findUserById(1);

// The `unwrap` method will return the value inside Some, or throw if it is None.
const user1 = userOption1.unwrap();
console.log(user1); // { id: 1, name: "Alice" }

// Example: Finding a user that does not exist
const userOption2 = findUserById(3);

// The `unwrapOr` method will return the value inside Some, or a default value if it is None.
const user2 = userOption2.unwrapOr({ id: 0, name: "Unknown" });
console.log(user2); // { id: 0, name: "Unknown" }

/*
The `expect` method behaves similarly to `unwrap`, but allows you to provide a custom error message.
If the Option is None, it will throw an error with the message you provide.
*/
const userOption3 = findUserById(3);

// Will throw an error with the provided message since the user was not found (Option is None)
const user3 = userOption3.expect("User not found, and it's critical!");
// Output: Error: User not found, and it's critical!

/*
The `isSome` and `isNone` methods allow you to check the state of the Option, which can be useful for conditional logic.
*/
const user5 = findUserById(4);
if (user5.isSome()) {
  console.log("User exists!");
} else {
  // user5.isNone()
  console.log("User does not exist!");
}
