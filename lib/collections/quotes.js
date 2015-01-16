Quotes = new Mongo.Collection('quotes'); 

Meteor.methods({
  getQuoteCount: function () {
    return Quotes.find().count();
  },
  quoteInsert: function(quoteAttributes) {    
		check(quoteAttributes, {      
			quote: String,      
			author: String    
		}); 

		Quotes.insert(quoteAttributes);
	}
});
