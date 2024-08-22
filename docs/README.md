<div align="center">

# 🐛 MondJS - Documentation

**_Monadic Error Handling for JavaScript/TypeScript._**

</div>

## ❓ Why Monadic Error Handling?

Monadic error handling provides a more structured and predictable approach to managing errors compared to traditional exception-based methods. Here’s why it can be beneficial:

1. **Explicit Error Handling**
   Monadic error handling makes error management explicit in your code. Instead of using exceptions that might be thrown and caught at various points, you handle errors directly through Result types. This leads to more predictable and understandable code flow, as you can see at a glance how errors are handled at each step.

2. **Avoid Silent Failures**
   In traditional error handling with exceptions, errors might go unnoticed if they aren’t properly caught or if the program flow doesn’t handle them correctly. By using Result, you ensure that every function’s success or failure is explicitly managed, avoiding potential silent failures.

3. **Improved Readability**
   Code using monadic error handling is often cleaner and more readable. Instead of having multiple try-catch blocks scattered throughout your code, you use a consistent approach to handle and chain errors. This can make your code easier to maintain and understand.

4. **Encourages Functional Programming Practices**
   Monadic error handling aligns well with functional programming principles, where functions return values that explicitly indicate success or failure. This approach encourages you to write functions that are composable and easier to reason about.

5. **Structured Error Propagation**
   With Result types, errors can be propagated up the call stack in a structured manner. Functions that return Result allow you to chain operations and handle errors in a consistent way, improving the robustness of your error-handling strategy.

## 🔮 Type Option

The `Option` type in **MondJS** is a safer and more expressive alternative to using `null` or `undefined` for handling values that may or may not be present. Instead of dealing with unexpected errors or possible references to `null` or `undefined`, the `Option` type forces the programmer to explicitly handle returned values, providing greater safety and clarity in code flow.

### How Does It Work? 🧰

An `Option` is a container that can have two possible states:

- `Some(value)`: Indicates that the value is present.
- `None`: Indicates that there is no value present.

This approach forces you to check whether the value is present before operating on it, eliminating potential errors caused by `null` or `undefined` values.

### Why Use `Option`? 🤔

1. **Runtime Safety**  
   By using `Option`, you eliminate the risk of trying to access properties or methods on a `null` or `undefined` value, which is one of the most common causes of errors in JavaScript/TypeScript.

2. **Explicit Handling of Optional Values**  
   Instead of relying on implicit conventions like returning `null` or `undefined`, `Option` forces the developer to explicitly handle cases where a value may not exist. This makes the code more robust and predictable.

3. **Improved Readability**  
   Using `Option` makes the code's intent clearer. Other developers reading your code can immediately see that an optional value is being handled, which improves the readability and maintainability of the code.

### Example of Using `Option` 📋

Here's an example of how you might use `Option` to search for a user in a list of users:

```ts
import { type Option, some, none } from "mondjs";

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

/**
 * Function that tries to find a user by their ID.
 * If the user is found, returns Some(user); otherwise, returns None.
 */
function findUserById(id: number): Option<User> {
  const user = users.find((user) => user.id === id);
  return user ? some(user) : none();
}
```

```ts
// Example: Searching for an existing user
const userOption1 = findUserById(1);

/* `unwrap` in this case will return the user ID 1 because it exists. 

Fact: With `unwrap` the variable user1 becomes the type that is being returned in Some, in this example, the type 'User'.
*/

const user1 = userOption1.unwrap();
console.log(user1); // { id: 1, name: "Alice" }
```

```ts
// Example: Searching for a non-existent user

// `unwrap` in this case will throw an exception because the value contained is None: "Called unwrap on a None value."
const userOption2 = findUserById(3).unwrap();

// In this way it is verified if it is None:
if (userOption2.isNone()) {
  console.log("User not found.");
}

// You can also unpack to a default value in case it is None:
const userDefault: User = { id: 0, name: "Unknown" };
const userOption2 = findUserById(3).unwrapOr(userDefault);

console.log(userOption2); // { id: 0, name: "Unknown" }
```

### Useful `Option` Methods 🧩

- **`unwrap()`**: Returns the value contained in `Some`, or throws an exception if it's `None`.

- **`unwrapOr(defaultValue)`**: Returns the value in `Some`, or a default value if it's `None`.

- **`expect("message")`**: Returns the value contained in `Some`, or throws an exception with a custom message if `None`.

- **`isSome()`**: Returns `true` if it's `Some`, otherwise `false`.

- **`isNone()`**: Returns `true` if it's `None`, otherwise `false`.

### Advantages of Using `Option` Over `null` or `undefined` 🌈

1. **Fewer Unexpected Errors**  
   Errors related to `null` and `undefined` are common and difficult to debug, especially in large applications. By utilizing `Option`, the compiler forces you to handle cases where a value might be absent explicitly, preventing unexpected situations and helping to reduce runtime errors.

2. **Clearer Control Flow**  
   With `Option`, your control flow is more explicit. Functions that return an `Option` make it clear from the start that the returned value could be present or absent, making it easier for other developers (or yourself) to understand how to handle the result without surprises.

3. **Avoids Sentinel Values**  
   In many cases, `null` or `undefined` are used as "sentinel values" to indicate the absence of a value, which can be error-prone and confusing. `Option` eliminates the need for these sentinel values, ensuring that any absence of a value is handled explicitly and safely.

4. **Improves TypeScript's Type Safety**  
   Code analysis tools can better detect how optional values are handled, helping to catch errors earlier in the development process.

5. **Optimized Code Reviews**  
   Since optional values are handled explicitly, code reviewers can quickly understand the logic and error cases, improving the overall quality of the code.

6. **Consistency in Error Handling**  
   Using `Option` promotes a consistent way of dealing with values that might not exist, which helps unify code patterns across a team.

## 👀 Examples

To see practical implementations of **MondJS** and learn how to use it effectively, visit the [examples directory](./examples/). Here, you’ll find a variety of use cases and sample code to help you get started with monadic error handling in both **JavaScript** and **TypeScript**.

Explore these examples to understand how to integrate **MondJS** into your projects and leverage its benefits.
