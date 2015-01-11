Template.viewQuote.helpers({  
  quotes: function() {    
    return Quotes.find();  
  }
});

Template.viewQuote.events({
	'click #showQuote': function(e) {
    e.preventDefault();
    Router.go('viewQuote');
    // return Quotes.find();
  }
});