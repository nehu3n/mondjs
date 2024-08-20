class Ok<T> {
  constructor(public value: T) {}

  public isOk(): boolean {
    return true;
  }

  public isErr(): boolean {
    return false;
  }

  public unwrap(): T {
    return this.value;
  }

  public unwrapOr(defaultValue: T): T {
    return this.value;
  }

  public expect(message: string): T {
    return this.value;
  }

  public unwrapOrElse(fallback: (error: never) => T): T {
    return this.value;
  }

  public andThen<U>(
    fallback: (value: T) => Result<U, never>
  ): Result<U, never> {
    return fallback(this.value);
  }

  public match<U>(ops: { Ok: (value: T) => U; Error: (error: never) => U }): U {
    return ops.Ok(this.value);
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

  public unwrap(): never {
    throw this.error;
  }

  public unwrapOr<T>(defaultValue: T): T {
    return defaultValue;
  }

  public expect(message: string): never {
    throw new Error(message);
  }

  public unwrapOrElse<T>(fallback: (error: E) => T): T {
    return fallback(this.error);
  }

  public andThen<U>(fallback: (value: never) => Result<U, E>): Result<U, E> {
    return this as Err<E>;
  }

  public match<U>(ops: { Ok: (value: never) => U; Error: (error: E) => U }): U {
    return ops.Error(this.error);
  }
}

type Result<T, E> = Ok<T> | Err<E>;

function ok<T>(value: T): Result<T, never> {
  return new Ok(value);
}

function err<E>(error: E): Result<never, E> {
  return new Err(error);
}

export type { Result };
export { ok, err };
