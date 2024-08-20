class Ok<T> {
  constructor(public value: T) {}

  public isOk(): boolean {
    return true;
  }

  public isErr(): boolean {
    return false;
  }
}

class Err<E> {
  constructor(public error: E) {}

  public isOk(): boolean {
    return false;
  }

  public isErr(): boolean {
    return true;
  }
}

type Result<T, E> = Ok<T> | Err<E>;

function ok<T>(value: T): Result<T, never> {
  return new Ok(value);
}

function err<E>(error: E): Result<never, E> {
  return new Err(error);
}

function unwrap<T, E>(result: Result<T, E>): T {
  if (result instanceof Ok) {
    return result.value;
  }
  throw result.error;
}

function unwrapOr<T, E>(result: Result<T, E>, defaultValue: T): T {
  if (result instanceof Ok) {
    return result.value;
  }
  return defaultValue;
}

function unwrapOrElse<T, E>(
  result: Result<T, E>,
  fallback: (error: E) => T
): T {
  if (result instanceof Ok) {
    return result.value;
  }
  return fallback(result.error);
}

function expect<T, E>(result: Result<T, E>, message: string): T {
  if (result instanceof Ok) {
    return result.value;
  }
  throw new Error(message);
}

function andThen<T, E, U>(
  result: Result<T, E>,
  fallback: (value: T) => Result<U, E>
): Result<U, E> {
  if (result instanceof Ok) {
    return fallback(result.value);
  }
  return result as Err<E>;
}

export default Result;
export { ok, err, unwrap, unwrapOr, unwrapOrElse, expect, andThen };
