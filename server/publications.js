Meteor.publish('quotes', function() {  
	var count = Quotes.find().count();

	var skip = Math.floor(Math.random() * count);
	var quote = Quotes.find({}, {
		limit: 1,
		skip: skip
	});
	return quote;
});