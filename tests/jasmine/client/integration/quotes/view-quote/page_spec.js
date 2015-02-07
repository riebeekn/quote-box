describe("view quote", function() {

	beforeEach(function (done) {
    Router.go('home');
    Tracker.afterFlush(function(){
      done();
    });
  });

  beforeEach(waitForRouter);

  describe("page", function() {
	  
	  it("should have the right title", function(done) {
	  	expect($('title').text()).toEqual('Quote Box - Home');
	  	done();
	  });

	  it("should have a show quote button", function(done) {
	  	expect($('#showQuote').text()).toEqual('Show me another quote!');
	  	done();
	  });

	  it("should have an add quote link", function(done) {
	  	expect($('#addQuote').text()).toEqual('Add a quote');
	  	done();
	  });

	  it("should show a quote", function(done) {
	  	// need to set a timeout for the quote to load
	  	Meteor.setTimeout(function(){
	  		expect($('#quoteText').text()).toBeTruthy(); // i.e. not empty
		  	done();
		  }, 5);
	  });

	  it("should show the number of quotes in the box", function(done) {
	  	var quoteCount = Counts.get('quoteCount');
	  	var quoteString = "Currently " + quoteCount +
	  		" quotes in the quote box."
	  	expect($('#quoteCount').text()).toContain(quoteString);
	  	done();
	  });
	});
});