import $ from 'jquery';
import axios from 'axios';
import Rx from 'rx';

const searchField = document.querySelector('.search');
const search$ = Rx.Observable.fromEvent(searchField, 'keyup')
	.map(e => e.target.value)
	.flatMapLatest(query => Rx.Observable.fromPromise(axios.get(`http://localhost:3000/people?name_like=${query}`)));

const resultList = document.querySelector('.results');
search$.subscribe(
	results => {
		$(resultList).empty();
		results.data.forEach(person => {
			$(resultList).append(`
					<div class="person">
						<div class="person__name">${person.name}</div>
						<img class="person__image" src="${person.avatar}" alt="${person.name}">
					</div>`);
		});
	},
	err => {
		console.log('Error', err);
	});
