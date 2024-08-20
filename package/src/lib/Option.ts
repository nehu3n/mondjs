class Some<T> {
  constructor(public value: T) {}

  public isSome(): boolean {
    return true;
  }

  public isNone(): boolean {
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
}

class None {
  public isSome(): boolean {
    return false;
  }

  public isNone(): boolean {
    return true;
  }

  public unwrap(): never {
    throw new Error("Called unwrap on a None value.");
  }

  public unwrapOr<T>(defaultValue: T): T {
    return defaultValue;
  }

  public expect(message: string): never {
    throw new Error(message);
  }
}

type Option<T> = Some<T> | None;

function some<T>(value: T): Option<T> {
  return new Some(value);
}

function none(): Option<never> {
  return new None();
}

export type { Option };
export { some, none };
