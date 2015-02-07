describe("clicking show quote button", function() {

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
    Meteor.setTimeout(function() {
    	initialQuote = $('#quoteText').html();
    	done();
    }, 300);
  });

  it("should display the next quote", function(done) {
    $('#showQuote').click();
	  
    Meteor.setTimeout(function(){
  		nextQuote = $('#quoteText').html();
  		expect(initialQuote).toBeTruthy(); // i.e. not empty
  		expect(nextQuote).toBeTruthy(); // i.e. not empty
  		expect(nextQuote).not.toEqual(initialQuote);
	  	done();
	  }, 300);
  });
});