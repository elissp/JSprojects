import { sw } from './stopWatch.js';

const container = document.getElementById('quote-container');
const authorHTML = document.getElementById('author');
const quoteHTML = document.getElementById('quote');
const loader = document.getElementById('loader');

const quote = {};

const isLoading = () => {
	loader.hidden = false;
	container.hidden = true;
};

const isComplete = () => {
	loader.hidden = true;
	container.hidden = false;
};

//Named export
export const newQuote = () => {
	authorHTML.textContent = quote.author;
	quoteHTML.textContent = quote.text;
};

isLoading();

export const getQuotes = async () => {
	// requesting data from the url
	await fetch('https://type.fit/api/quotes')
		.then((res) => {
			console.log('Responce Object', res);
			return res.json();
		}) // .then(function(res){return res.json()})

		.then((data) => {
			console.log('Data', data);
			// selecting a random element
			return data[Math.floor(Math.random() * data.length)];
		})

		//  {text:....., author: .....}
		.then((data) => {
			console.log('Random selected value', data);

			isLoading();
			data?.author ? (quote.author = data.author) : (quote.author = 'Unknown');
			quote.text = data?.text;
			// Starting stop watch
			sw.start();
			setTimeout(() => {
				isComplete();
				// Reseting stop watch
				sw.reset();
			}, Math.floor(Math.random() * 5) * 1000);
		});
};

getQuotes().then(newQuote);
// Default export
// export default getQuotes;
