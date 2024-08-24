import { type Result, err, ok } from "mondjs";

/**
  * Result<OkType, ErrType>
  
  The first type that Result receives is the success type, the one to be passed to the 'ok' function. 
  The second is the failure type, which will be passed to the 'err' function.
*/
function divide(a: number, b: number): Result<number, string> {
  if (a === 0 || b === 0) {
    return err("Divided by 0."); // Returns an error with 'err'
  }

  return ok(a / b); // Returns success value with 'ok' (in this case, the division between 'a' and 'b')
}

// The `unwrap` method inherits the Ok value to the 'result' variable and in case of an error, throws panic on it.
const result = divide(20, 2).unwrap();
console.log(result); // 10

// The `unwrapOr` method inherits the result Ok to the variable and in case it is an error, it assigns the value passed as parameter.
const result2 = divide(10, 0).unwrapOr(5);
console.log(result2); // Gives an error, the past value is inherited: 5

/*
The method `unwrapOrElse` executes a callback which has to return a value of type T. 
This is useful when in case of error extra operations must be done and return a default value.
*/
const result3 = divide(0, 6).unwrapOrElse(() => {
  const randomNumber = Math.random();
  return randomNumber;
});
console.log(result3); // The random number generated.

/*
The `andThen` method is similar to `unwrapOrElse`, except that instead of 
being called when an error is returned, it is executed when the result is Ok.
*/
const result4 = divide(10, 2).andThen((value) => {
  // Value is 5 (10 / 2)

  return ok(value * 3);
});
console.log(result4); // 15

/*
The `expect` method is similar to `unwrap`: it inherits to the variable the value of Ok; the 
difference is that instead of 'panic' with the returned error, it does it with a custom message.
*/
const result5 = divide(4, 0).expect(
  "An error occurred because an attempt was made to divide by 0."
);
console.log(result5); // Throw with the message “An error occurred because an attempt was made to divide by 0.”.

/*
The `match` method receives two callbacks: one on the Ok result and one on the Err. 
These callbacks in turn have a parameter representing the value and the error in each case.
*/
divide(40, 2).match({
  Ok: (value) => console.log(`The result of the division: ${value}`),
  Error: (err) => console.error(`An error occurred: ${err}`),
});

const result6 = divide(3, 6);
if (result6.isOk()) {
  console.log("The result returned Ok!");
} else {
  // result6.isErr()
  console.error("The result returned Error!");
}

/*
The `unpack` method returns an Array[(T|null), (E|null)]. In case the result is Ok, 
`error` is null; otherwise, if the result is Err, ` _result` is null.
*/
const [_result, error] = divide(15, 3).unpack();
console.log(_result); // 5
console.log(error); // null
