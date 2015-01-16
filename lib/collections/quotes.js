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

		var quote = _.extend(quoteAttributes, {      
			approved: true
		});

		Quotes.insert(quote);
	}
});
