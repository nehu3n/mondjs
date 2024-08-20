import type Result from "../../lib/Result";
import { err, ok } from "../../lib/Result";

import { ERROR_MESSAGE_DIVIDE } from "./consts";

function divide(a: number, b: number): Result<number, string> {
  if (a === 0 || b === 0) {
    return err(ERROR_MESSAGE_DIVIDE);
  }

  return ok(a / b);
}

export { divide };