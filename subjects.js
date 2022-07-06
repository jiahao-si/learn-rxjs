import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

/**
 * Subject is a special type of Observable that allows values to be multicasted to many Observers
 * can multicast to many Observers
 */
// const subject = new Subject();

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(1);
// subject.next(2);

/**
 * BehaviorSubject
 * The second Observer receives the value 2 even though it subscribed after the value 2 was sent
 */

// const subject = new BehaviorSubject(0); // 0 is the initial value

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// subject.next(3);

/**
 * ReplaySubject
 * records multiple values from the Observable execution and replays them to new subscribers.
 */
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);

/**
 * only the last value of the Observable execution is sent to its observers;
 * must call complete
 */
const subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);
subject.complete();
