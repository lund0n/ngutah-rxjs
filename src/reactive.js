import Rx from 'rx';

let a = 5;
let b = a * a;

console.log('Initial a:', a);
console.log('b:', b);

a = 10;
console.log('Changing a to:', a);
console.log('b:', b);

console.log('With observables');
const a$ = Rx.Observable.of(5, 10)
	.delay(500)
	.doOnNext(a => console.log('a is:', a));

const b$ = a$
	.map(a => a * a);

b$.subscribe(b => console.log('b is:', b));
