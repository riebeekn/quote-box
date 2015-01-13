Template.viewQuote.helpers({ 
	theQuote: function () {
    return Quotes.findOne();
  }
});

Template.viewQuote.events({
	'click #showQuote': function(e) {
		e.preventDefault();
		getQuote();
  }
});