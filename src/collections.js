import Rx from 'rx';

const numbers = [
	{value: 1},
	{value: 2},
	{value: 3},
	{value: 4},
	{value: 5},
	{value: 6}
];

const result = numbers
	.map(val => val.value)
	.filter(val => val % 2 === 0);

result.forEach(val => {
	console.log(val);
});

// const numbers$ = Rx.Observable.create(observer => {
// 	// Observables push values, rather than consumer pulling
// 	// Observables can return multiple values
// 	observer.onNext({value: 1});
// 	observer.onNext({value: 2});
// 	observer.onNext({value: 3});
// 	observer.onNext({value: 4});
// 	observer.onNext({value: 5});
// 	observer.onNext({value: 6});
//
// 	// Observables have a complete state.
// 	observer.onCompleted();
//
// 	// Observables are disposable.
// 	return function dispose() {
// 		// Do any disposal logic here.
// 		console.log('disposed.');
// 	};
// });
//
// // equivalent to:
// // const numbers$ = Rx.Observable.from(numbers);
//
// const result$ = numbers$
// 	.map(val => val.value)
// 	.filter(val => val % 2 === 0);
//
// // What is an Observable without a subscription?
// result$.subscribe(x => console.log(x));
