describe("view quote", function() {

	var initialQuote;
	var nextQuote;

	beforeEach(function (done) {
    Router.go('home');
    Tracker.afterFlush(function(){
      done();
    });
  });

  beforeEach(waitForRouter);

  beforeEach(function(done) {
  	initialQuote = $('#quoteText').html();
  	done();
  });

  beforeEach(function(done) {
  	$('#showQuote').click();
  	done();
  });

  it("should display the next quote", function(done) {

	  Meteor.setTimeout(function(){
  		nextQuote = $('#quoteText').html();
  		expect(initialQuote).toBeTruthy(); // i.e. not empty
  		expect(nextQuote).toBeTruthy(); // i.e. not empty
  		expect(nextQuote).not.toEqual(initialQuote);
	  	done();
	  }, 100);
  });
});