Template.addQuote.rendered = function () {
  $('#addQuote').parsley({trigger: 'change'});
}

Template.addQuote.events({
  'submit form': function(e) {
    e.preventDefault();

    var quote = {
      quote: $(e.target).find('[name=quote]').val(),
      author: $(e.target).find('[name=author]').val()
    };

    Meteor.call('quoteInsert', quote, function(error, result) {    
    	if (error) {
        toastr.error("Failed to insert your quote, please try again.");
    		throw error;
      }     

  		toastr.success('Thank you, your quote has been added!');
    	Router.go('viewQuote');      
    });
  }
});