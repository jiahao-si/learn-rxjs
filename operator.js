import { of, map, first } from 'rxjs';

/**
 * Pipeable Operators
 * A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
 * It is a pure operation: the previous Observable stays unmodified.
 */
//obs.pipe(op1(), op2(), op3(), op4());

/**
 * Creation Operators
 *  can be called as standalone functions to create a new Observable.
 *  create an Observable with some common predefined behavior or by joining other Observables
 */

of(1, 2, 3)
  .pipe(
    map((x) => x * x)
    // first()
  )
  .subscribe((v) => console.log(`value: ${v}`));

/**
 * create custom operators
 */
import { pipe, filter, map } from 'rxjs';

function discardOddDoubleEven() {
  return pipe(
    filter((v) => !(v % 2)),
    map((v) => v + v)
  );
}
