import { writable } from 'svelte/store';

export const pageHeader = writable('Logo'); // default to some logo

// pageHeader.subscribe((value) => {
// 	console.log(value);
// });

// pageHeader.set(1); // logs '1'

// pageHeader.update((n) => n + 1); // logs '2'