import { interval } from 'rxjs';

/**
 * interval: emits sequential numbers every specified interval of time
 */
const observable1 = interval(400);
const observable2 = interval(300);

/**
 * A Subscription is an object that represents a disposable resource,
 * usually the execution of an Observable.
 */
const subscription = observable1.subscribe((x) => console.log('first: ' + x));
const childSubscription = observable2.subscribe((x) =>
  console.log('second: ' + x)
);

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
