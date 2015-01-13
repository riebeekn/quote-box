// Fixture data
if (Quotes.find().count() === 0) {
	Quotes.insert({
		text: 'Whatever the mind of man can conceive and believe, it can achieve.',
		author: 'Napoleon Hill'
	});
	Quotes.insert({
		text: 'Strive not to be a success, but rather to be of value.',
		author: 'Albert Einstein'
	});
	Quotes.insert({
		text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
		author: 'Robert Frost'
	});
}