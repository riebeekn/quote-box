Template.viewQuote.helpers({ 
	theQuote: function () {
    return Quotes.findOne();
  },
  quoteCount: function() {
  	return Counts.get('quoteCount');
  }
});

Template.viewQuote.events({
	'click #showQuote': function(e) {
		e.preventDefault();
		getQuote();
  }
});