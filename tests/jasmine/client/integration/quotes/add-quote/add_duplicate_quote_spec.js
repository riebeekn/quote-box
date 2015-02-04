describe("attempt to add a duplicate quote", function() {

	var anExistingQuote;
	var initialQuoteCount;
	
	beforeEach(function (done) {
    Router.go('home');
    Tracker.afterFlush(function(){
      done();
    });
  });

	beforeEach(waitForRouter);

	beforeEach(function(done) {
		initialQuoteCount = Counts.get('quoteCount');
		done();
	});

	beforeEach(function(done) {
		anExistingQuote = $('#quoteText').text();
		done();
	});

	beforeEach(function (done) {
    Router.go('addQuote');
    Tracker.afterFlush(function(){
      done();
    });
  });

	beforeEach(waitForRouter);

	beforeEach(function(done) {
		$('#quote').val(anExistingQuote);
		$('#author').val('Bill Baggins');
		
		$('#addQuoteBtn').click();
		done();
	});

	it("should not add the quote", function(done) {
		Meteor.setTimeout(function() {
			expect(initialQuoteCount).toEqual(Counts.get('quoteCount'));
			done();
		}, 500);
	});

	it("should display an error message", function(done) {
		Meteor.setTimeout(function() {
			expect($('.toast-message').text()).toEqual(
				"That quote is already in the quote box, please try another.");
			done();
		}, 500);
	});
});