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

export default Result;
export { ok, err };
