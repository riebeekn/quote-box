Quotes = new Mongo.Collection('quotes'); 

Meteor.methods({
  getQuoteCount: function () {
    return Quotes.find({approved: true}).count();
  },
  quoteInsert: function(quoteAttributes) {    
		check(quoteAttributes, {      
			quote: String,      
			author: String    
		});

		if (!quoteAttributes.quote)
			throw new Meteor.Error('MISSING-QUOTE', 'Quote is required.');
		if (!quoteAttributes.author)
			throw new Meteor.Error('MISSING-AUTHOR', 'Author is required.')
		var duplicateQuote = Quotes.findOne({quote: quoteAttributes.quote});    
    if (duplicateQuote) {      
    	throw new Meteor.Error(
			'DUPLICATE-POST', 
			'That quote is already in the quote box, please try another.'); 
    }

		var quote = _.extend(quoteAttributes, {      
			approved: true
		});

		Quotes.insert(quote);
	}
});
