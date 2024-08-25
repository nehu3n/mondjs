/**
 * Represents a value that is present.
 *
 * @template T - The type of the value contained in the Option.
 */
export class Some<T> {
  /**
   * Creates an instance of Some.
   *
   * @param {T} value - The value to be contained in this Some instance.
   */
  constructor(public value: T) {}

  /**
   * Returns true if this is a Some variant.
   *
   * @returns {boolean} - Always returns true.
   *
   * @example
   * const option = some(5);
   * console.log(option.isSome()); // true
   */
  public isSome(): boolean {
    return true;
  }

  /**
   * Returns false if this is a None variant.
   *
   * @returns {boolean} - Always returns false.
   *
   * @example
   * const option = none();
   * console.log(option.isNone()); // true
   */
  public isNone(): boolean {
    return false;
  }

  /**
   * Returns the value contained in this Some instance.
   *
   * @returns {T} - The contained value.
   *
   * @example
   * const option = some("Hello");
   * console.log(option.unwrap()); // "Hello"
   */
  public unwrap(): T {
    return this.value;
  }

  /**
   * Returns the value contained in this Some instance, or a default value if it is a None.
   *
   * @param {T} defaultValue - The default value to return if this is a None.
   * @returns {T} - The contained value.
   *
   * @example
   * const option = some(10);
   * console.log(option.unwrapOr(20)); // 10
   */
  public unwrapOr(defaultValue: T): T {
    return this.value;
  }

  /**
   * Returns the value contained in this Some instance, or throws an exception with a custom message if it is a None.
   *
   * @param {string} message - The message to be used if an exception is thrown.
   * @returns {T} - The contained value.
   *
   * @example
   * const option = some(42);
   * console.log(option.expect("Value should be present")); // 42
   */
  public expect(message: string): T {
    return this.value;
  }

  /**
   * Matches the Option and applies a function based on whether it is Some or None.
   *
   * @param {object} ops - An object containing two functions: `Some` and `None`.
   * @param {(value: T) => U} ops.Some - The function to apply if this is a Some instance.
   * @param {() => U} ops.None - The function to apply if this is a None instance.
   * @returns {U} - The result of applying one of the functions.
   *
   * @example
   * const option = some(5);
   * const message = option.match({
   *   Some: value => `Value is ${value}`,
   *   None: () => "No value"
   * });
   * console.log(message); // "Value is 5"
   */
  public match<U>(ops: { Some: (value: T) => U; None: () => U }): U {
    return ops.Some(this.value);
  }
}

/**
 * Represents a value that is absent.
 */
export class None {
  /**
   * Returns false if this is a Some variant.
   *
   * @returns {boolean} - Always returns false.
   *
   * @example
   * const option = none();
   * console.log(option.isSome()); // false
   */
  public isSome(): boolean {
    return false;
  }

  /**
   * Returns true if this is a None variant.
   *
   * @returns {boolean} - Always returns true.
   *
   * @example
   * const option = none();
   * console.log(option.isNone()); // true
   */
  public isNone(): boolean {
    return true;
  }

  /**
   * Throws an exception with a message if called on a None instance.
   *
   * @throws {Error} - Throws an error with a message indicating that unwrap was called on None.
   *
   * @example
   * const option = none();
   * option.unwrap(); // Throws "Called unwrap on a None value."
   */
  public unwrap(): never {
    throw new Error("Called unwrap on a None value.");
  }

  /**
   * Returns a default value if this is a None instance.
   *
   * @param {T} defaultValue - The default value to return if this is a None.
   * @returns {T} - The default value.
   *
   * @example
   * const option = none();
   * console.log(option.unwrapOr("Default")); // "Default"
   */
  public unwrapOr<T>(defaultValue: T): T {
    return defaultValue;
  }

  /**
   * Throws an exception with a custom message if this is a None instance.
   *
   * @param {string} message - The message to be used if an exception is thrown.
   * @throws {Error} - Throws an exception with the given message.
   *
   * @example
   * const option = none();
   * option.expect("No value present"); // Throws "No value present"
   */
  public expect(message: string): never {
    throw new Error(message);
  }

  /**
   * Matches the Option and applies a function based on whether it is Some or None.
   *
   * @param {object} ops - An object containing two functions: `Some` and `None`.
   * @param {(value: never) => U} ops.Some - The function to apply if this is a Some instance.
   * @param {() => U} ops.None - The function to apply if this is a None instance.
   * @returns {U} - The result of applying one of the functions.
   *
   * @example
   * const option = none();
   * const message = option.match({
   *   Some: value => `Value is ${value}`,
   *   None: () => "No value"
   * });
   * console.log(message); // "No value"
   */
  public match<U>(ops: { Some: (value: never) => U; None: () => U }): U {
    return ops.None();
  }
}

type Option<T> = Some<T> | None;

/**
 * Creates a Some instance with the given value.
 *
 * @param {T} value - The value to be contained in the Some instance.
 * @returns {Option<T>} - A Some instance containing the given value.
 *
 * @example
 * const option = some(3.14);
 * console.log(option.unwrap()); // 3.14
 */
function some<T>(value: T): Option<T> {
  return new Some(value);
}

/**
 * Creates a None instance.
 *
 * @returns {Option<never>} - A None instance representing the absence of a value.
 *
 * @example
 * const option = none();
 * console.log(option.unwrapOr("Fallback")); // "Fallback"
 */
function none(): Option<never> {
  return new None();
}

export type { Option };
export { some, none };
