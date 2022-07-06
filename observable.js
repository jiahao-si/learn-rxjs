import { Observable } from 'rxjs';

/**
 * Observables are lazy Push collections of multiple values.
 */
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

/**
 *  An Observer is a consumer of values delivered by an Observable.
 */
const obserer = {
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
};

console.log('just before subscribe');
observable.subscribe(obserer);
console.log('just after subscribe');

/**
 * When subscribing to an Observable, you may also just provide the next callback as an argument, without being attached to an Observer object, for instance like this:
 */
observable.subscribe((x) => console.log('Observer got a next value: ' + x));
