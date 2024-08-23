/**
 * Represents a successful result containing a value.
 *
 * @template T - The type of the value contained in the result.
 */
class Ok<T> {
  /**
   * Creates an instance of Ok.
   *
   * @param {T} value - The value to be contained in this Ok instance.
   */
  constructor(public value: T) {}

  /**
   * Returns true if this is an Ok variant.
   *
   * @returns {boolean} - Always returns true.
   *
   * @example
   * const result = ok(5);
   * console.log(result.isOk()); // true
   */
  public isOk(): boolean {
    return true;
  }

  /**
   * Returns false if this is an Err variant.
   *
   * @returns {boolean} - Always returns false.
   *
   * @example
   * const result = err("Error");
   * console.log(result.isErr()); // true
   */
  public isErr(): boolean {
    return false;
  }

  /**
   * Returns the value contained in this Ok instance.
   *
   * @returns {T} - The contained value.
   *
   * @example
   * const result = ok(42);
   * console.log(result.unwrap()); // 42
   */
  public unwrap(): T {
    return this.value;
  }

  /**
   * Returns the value contained in this Ok instance, or a default value if it is an Err.
   *
   * @param {T} defaultValue - The default value to return if this is an Err.
   * @returns {T} - The contained value.
   *
   * @example
   * const result = ok(10);
   * console.log(result.unwrapOr(20)); // 10
   */
  public unwrapOr(defaultValue: T): T {
    return this.value;
  }

  /**
   * Returns the value contained in this Ok instance, or throws an exception with a custom message if it is an Err.
   *
   * @param {string} message - The message to be used if an exception is thrown.
   * @returns {T} - The contained value.
   *
   * @example
   * const result = ok("Success");
   * console.log(result.expect("Should not fail")); // "Success"
   */
  public expect(message: string): T {
    return this.value;
  }

  /**
   * Returns the value contained in this Ok instance, or the result of a fallback function if it is an Err.
   *
   * @param {(error: never) => T} fallback - The function to compute a fallback value.
   * @returns {T} - The contained value.
   *
   * @example
   * const result = ok("Value");
   * console.log(result.unwrapOrElse(() => "Fallback")); // "Value"
   */
  public unwrapOrElse(fallback: (error: never) => T): T {
    return this.value;
  }

  /**
   * Applies a function to the contained value if this is an Ok instance, and returns the resulting Result.
   *
   * @param {(value: T) => Result<U, never>} fallback - The function to apply to the contained value.
   * @returns {Result<U, never>} - The result of applying the function.
   *
   * @example
   * const result = ok(5);
   * const newResult = result.andThen(value => ok(value * 2));
   * console.log(newResult.unwrap()); // 10
   */
  public andThen<U>(
    fallback: (value: T) => Result<U, never>
  ): Result<U, never> {
    return fallback(this.value);
  }

  /**
   * Matches the Result and applies a function based on whether it is Ok or Err.
   *
   * @param {object} ops - An object containing two functions: `Ok` and `Error`.
   * @param {(value: T) => U} ops.Ok - The function to apply if this is an Ok instance.
   * @param {(error: never) => U} ops.Error - The function to apply if this is an Err instance.
   * @returns {U} - The result of applying one of the functions.
   *
   * @example
   * const result = ok(100);
   * const message = result.match({
   *   Ok: value => `Value is ${value}`,
   *   Error: () => "Error occurred"
   * });
   * console.log(message); // "Value is 100"
   */
  public match<U>(ops: { Ok: (value: T) => U; Error: (error: never) => U }): U {
    return ops.Ok(this.value);
  }

  /**
   * Unpacks the Result into a two-element array: [value, error], where one of them will be null.
   *
   * @returns {[T | null, null]} - A tuple where the first element is the value and the second element is null.
   *
   * @example
   * const result = ok("Hello");
   * const [value, error] = result.unpack();
   * console.log(value); // "Hello"
   * console.log(error); // null
   */
  public unpack(): [T | null, null] {
    return [this.value, null];
  }
}

/**
 * Represents a failed result containing an error.
 *
 * @template E - The type of the error contained in the result.
 */
class Err<E> {
  /**
   * Creates an instance of Err.
   *
   * @param {E} error - The error to be contained in this Err instance.
   */
  constructor(public error: E) {}

  /**
   * Returns false if this is an Ok variant.
   *
   * @returns {boolean} - Always returns false.
   *
   * @example
   * const result = err("Error");
   * console.log(result.isOk()); // false
   */
  public isOk(): boolean {
    return false;
  }

  /**
   * Returns true if this is an Err variant.
   *
   * @returns {boolean} - Always returns true.
   *
   * @example
   * const result = err("Error");
   * console.log(result.isErr()); // true
   */
  public isErr(): boolean {
    return true;
  }

  /**
   * Throws an exception with the contained error.
   *
   * @throws {E} - Throws the contained error.
   *
   * @example
   * const result = err("Something went wrong");
   * result.unwrap(); // Throws "Something went wrong"
   */
  public unwrap(): never {
    throw this.error;
  }

  /**
   * Returns a default value if this is an Err instance.
   *
   * @param {T} defaultValue - The default value to return if this is an Err.
   * @returns {T} - The default value.
   *
   * @example
   * const result = err("Failed");
   * console.log(result.unwrapOr("Default")); // "Default"
   */
  public unwrapOr<T>(defaultValue: T): T {
    return defaultValue;
  }

  /**
   * Throws an exception with a custom message if this is an Err instance.
   *
   * @param {string} message - The message to be used if an exception is thrown.
   * @throws {Error} - Throws an exception with the given message.
   *
   * @example
   * const result = err("Error occurred");
   * result.expect("An error occurred"); // Throws "An error occurred"
   */
  public expect(message: string): never {
    throw new Error(message);
  }

  /**
   * Returns the result of a fallback function if this is an Err instance.
   *
   * @param {(error: E) => T} fallback - The function to compute a fallback value.
   * @returns {T} - The result of the fallback function.
   *
   * @example
   * const result = err("Failure");
   * console.log(result.unwrapOrElse(err => `Fallback: ${err}`)); // "Fallback: Failure"
   */
  public unwrapOrElse<T>(fallback: (error: E) => T): T {
    return fallback(this.error);
  }

  /**
   * Returns the original Err instance unchanged.
   *
   * @param {(value: never) => Result<U, E>} fallback - The function to apply to the value if this is an Ok instance.
   * @returns {Result<U, E>} - The original Err instance.
   *
   * @example
   * const result = err("Error");
   * const newResult = result.andThen(() => ok("Value"));
   * console.log(newResult); // Err("Error")
   */
  public andThen<U>(fallback: (value: never) => Result<U, E>): Result<U, E> {
    return this as Err<E>;
  }

  /**
   * Matches the Result and applies a function based on whether it is Ok or Err.
   *
   * @param {object} ops - An object containing two functions: `Ok` and `Error`.
   * @param {(value: never) => U} ops.Ok - The function to apply if this is an Ok instance.
   * @param {(error: E) => U} ops.Error - The function to apply if this is an Err instance.
   * @returns {U} - The result of applying one of the functions.
   *
   * @example
   * const result = err("Something went wrong");
   * const message = result.match({
   *   Ok: value => `Value: ${value}`,
   *   Error: error => `Error: ${error}`
   * });
   * console.log(message); // "Error: Something went wrong"
   */
  public match<U>(ops: { Ok: (value: never) => U; Error: (error: E) => U }): U {
    return ops.Error(this.error);
  }

  /**
   * Unpacks the Result into a two-element array: [value, error], where one of them will be null.
   *
   * @returns {[null, E | null]} - A tuple where the first element is null and the second element is the error.
   *
   * @example
   * const result = err("An error");
   * const [value, error] = result.unpack();
   * console.log(value); // null
   * console.log(error); // "An error"
   */
  public unpack(): [null, E | null] {
    return [null, this.error];
  }
}

type Result<T, E> = Ok<T> | Err<E>;

/**
 * Creates an Ok instance with the given value.
 *
 * @param {T} value - The value to be contained in the Ok instance.
 * @returns {Result<T, never>} - An Ok instance containing the given value.
 *
 * @example
 * const result = ok(5);
 * console.log(result.unwrap()); // 5
 */
function ok<T>(value: T): Result<T, never> {
  return new Ok(value);
}

/**
 * Creates an Err instance with the given error.
 *
 * @param {E} error - The error to be contained in the Err instance.
 * @returns {Result<never, E>} - An Err instance containing the given error.
 *
 * @example
 * const result = err("Error message");
 * console.log(result.unwrapOr("Fallback")); // "Fallback"
 */
function err<E>(error: E): Result<never, E> {
  return new Err(error);
}

export type { Result };
export { ok, err };
