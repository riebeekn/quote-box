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
			Meteor.setTimeout(function(){
				expect($('title').text()).toEqual('Quote Box - Add quote');
				done();
			}, 5);
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
	  	Meteor.setTimeout(function() {
	  		expect($('title').text()).toEqual('Quote Box - Home');
	  		done();
	  	}, 5);
	  });
	});
});

// NOTE: example of a helper we could create
// by not creating the method on the proto-type
// we can call it like a static method
// i.e. Assert.areEqual('title', 'Quote Box - Home', done);
var Assert = function() {};

Assert.areEqual = function(expected, actual, done) {
	Meteor.setTimeout(function() {
		expect($(expected).text()).toEqual(actual);
		done();
	}, 0);
};