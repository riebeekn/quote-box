describe("navigation", function() {

	describe("from view quote page", function() {

		beforeEach(function (done) {
	    Router.go('home');
	    Tracker.afterFlush(function(){
	      done();
	    });
	  });

  	beforeEach(waitForRouter);

		it("should be able to navigate to add quote page", function(done) {
			$('#addQuote').click();
			Assert.areEqual('title', 'Quote Box - Add quote', done);
		});
	});

	describe("from add quote page", function() {
		beforeEach(function (done) {
	    Router.go('addQuote');
	    Tracker.afterFlush(function(){
	      done();
	    });
	  });

  	beforeEach(waitForRouter);

	  it("should be able to navigate to the view quote page", function(done) {
	  	$('#viewQuote').click();
	  	Assert.areEqual('title', 'Quote Box - Home', done);
	  });
	});
});