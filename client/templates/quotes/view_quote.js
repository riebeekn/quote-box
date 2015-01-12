Template.viewQuote.helpers({ 
	theQuote: function () {
    return Quotes.findOne();
  }
});

Template.viewQuote.events({
	'click button': function(e) {
		e.preventDefault();
		getQuote();
  }
});