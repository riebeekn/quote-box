describe("add quote", function() {

	var initialQuoteCount;

	beforeEach(function (done) {
    Router.go('addQuote');
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
		var ticks = new Date().getTime();
		$('#quote').val('My quote_' + ticks);
		$('#author').val('Bill Baggins');
		
		$('#addQuoteBtn').click();
		done();
	});

	beforeEach(waitForRouter);

	it("should successfully add a quote", function(done) {
		// can't use assert helper as Counts.get needs to be in the timout block
		Meteor.setTimeout(function() {
			expect(initialQuoteCount + 1).toEqual(Counts.get('quoteCount'));
			done();
		}, 500);
	});

	it("should display a success message", function(done) {
		Assert.areEqual('.toast-message', 'Thank you, your quote has been added!', done, 500);
	});
});