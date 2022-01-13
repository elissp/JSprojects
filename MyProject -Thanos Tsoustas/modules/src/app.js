// All the imports at the top of the file! (Although import statements are hoisted)
import { StopWatch } from './stopWatch.js'; // the .js is needed here!

// "import" => brings (import) code from one file to another
// variable, function, classes.....

//  The import statement is written like this
/* import ..... from "directory" */

// For named exports (guess what, exported by name) the statement is:
/* import { variable } from "directory" */

// For default exports the statement is:
/* import variable from "directory" */

import { newQuote } from './quoteGenerator.js';

const buttonHTML = document.getElementById('new-quote');

// the imported class
let newStopWatchObject = new StopWatch();
console.log(newStopWatchObject.duration);

// Adding an event listener
buttonHTML.addEventListener(
	'click',
	// Dynamic import
	async () =>
		await import('./quoteGenerator.js').then((imported) =>
			imported.getQuotes().then(newQuote)
		)
);
