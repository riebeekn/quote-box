Template.viewQuote.helpers({  
  quotes: function() {    
    return Quotes.find();  
  }
});

Template.viewQuote.events({
	'click button': function(e) {
		alert('click');
    // e.preventDefault();
    // Router.go('viewQuote');
    // return Quotes.find();
  }
});