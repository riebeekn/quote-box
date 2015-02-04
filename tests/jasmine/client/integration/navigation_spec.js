describe("navigation", function() {

	describe("from view quote page", function() {

		beforeEach(function (done) {
	    Router.go('home');
	    Tracker.afterFlush(function(){
	      done();
	    });
	  });

  	beforeEach(waitForRouter);

  	beforeEach(function(done) {
	  	$('#addQuote').click();
	  	done();
	  });

		it("should be able to navigate to add quote page", function(done) {
			Meteor.setTimeout(function(){
				expect($('h1').text()).toEqual('Add a quote');
				done();
			}, 500);
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

  	beforeEach(function(done) {
  		$('#viewQuote').click();
	  	done();
	  });

	  it("should be able to navigate to the view quote page", function(done) {
	  	Meteor.setTimeout(function() {
	  		expect($('#showQuote').text()).toEqual('Show me another quote!');
	  		done();
	  	}, 500);
	  });
	});
});