<div align="center">

# 🐛 MondJS

**_Monadic Error Handling for JavaScript/TypeScript_**

[![Minzipped size][bundlephobia-src]][bundlephobia-href]

</div>

## 👋🏼 About

**MondJS** is a _lightweight_ JavaScript/TypeScript library that brings **monadic error handling**, _inspired by Rust_, to your codebase.

This approach to **error handling is more robust and reliable** than traditional exception handling, which should be reserved for truly exceptional cases, rather than used as the primary method for managing common errors in general situations.

## 🚀 Getting Started

### Installation 📥

You can install MondJS using **your preferred package manager**:

`npm:`

```
npm install mondjs
```

`yarn:`

```
yarn add mondjs
```

`pnpm:`

```
pnpm add mondjs
```

### Basic examples 🔎

These basic examples show **_very briefly_** two of the characteristics of **MondJS**: `Result` and `Option`.

<details>
<summary>🎭 Result</summary>

<hr />

```ts
import { type Result, ok, err } from "mondjs";

function divide(a: number, b: number): Result<number, string> {
  if (a === 0 || b === 0) {
    return err("Divided by 0.");
  }

  return ok(a / b);
}

const result = divide(4, 0).unwrap();
console.log(result);
```

<hr />

</details>

<details>
<summary>🔮 Option</summary>

<hr />

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

function findUserById(id: number): Option<User> {
  const user = users.find((user) => user.id === id);

  return user ? some(user) : none();
}

const defaultUser: User = { id: 3, name: "Jhon" };
const userOption = findUserById(3).unwrapOr(defaultUser);
console.log(userOption);
```

<hr />

</details>

<br />

For more details and to see all the functionalities of MondJS, please refer to the [documentation section](#documentation-).

### Documentation 📖

For detailed information on using **MondJS**, including _guides and examples_, see **documentation in the** [docs folder](https://github.com/nehu3n/mondjs/blob/main/docs) in the GitHub repository:

- 💡 **Main page:** [docs/README.md](https://github.com/nehu3n/mondjs/blob/main/docs/README.md) - Overview and basic explanation.

- 👀 **Examples:** [docs/examples](https://github.com/nehu3n/mondjs/tree/main/docs/examples) - Practical examples for various use cases.

Explore these resources to get started with **MondJS**.

## 📄 License

The whole project is under the **MIT license** ([see file](https://github.com/nehu3n/mondjs/tree/main/LICENSE)).

## 👤 Author

**MondJS** was created and mainly developed by **Nehuén** ([GitHub here](https://github.com/nehu3n)).

[bundlephobia-src]: https://badgen.net/bundlephobia/minzip/mondjs
[bundlephobia-href]: https://bundlephobia.com/result?p=mondjs
