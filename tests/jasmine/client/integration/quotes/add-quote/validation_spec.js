describe("add quote validation", function() {
	beforeEach(function (done) {
    Router.go('addQuote');
    Tracker.afterFlush(function(){
      done();
    });
  });

	beforeEach(waitForRouter);

	beforeEach(function(done) {
    Meteor.setTimeout(function() {
    	$('#addQuoteBtn').click();
    }, 500);
  	done();
  });

  function resetFields() {
    $('#quote').val('');
    $('#author').val('');
  }

  function setQuote() { 
    $('#quote').val('Some quote!');
  }

  function setAuthor() {
    $('#author').val('Some author');
  }

  it("should show validation when both Quote and Author are missing", function(done) {
    resetFields();
    Meteor.setTimeout(function() {
      expect($('.parsley-custom-error-message').text()).toEqual(
        "Quote can't be empty.Author can't be empty.");
      done();
    }, 500);
  });

  it("should show validation when Quote is missing", function(done) {
    resetFields();
    setAuthor();
    $('#addQuoteBtn').click();
  	Meteor.setTimeout(function(){
	  	expect($('.parsley-custom-error-message').text()).toEqual("Quote can't be empty.");
      done();
	  }, 500);
  });

  it("should not show validation when Quote is filled in", function(done) {
    resetFields();
    setQuote();
    Meteor.setTimeout(function(){
      expect($('.parsley-required').text()).not.toEqual("Quote can't be empty.");
      done();
    }, 500);
  });

  it("should show validation when Author is missing", function(done) {
    resetFields();
    setQuote();
  	Meteor.setTimeout(function(){
	  	expect($('.parsley-custom-error-message').text()).toEqual("Author can't be empty.");
      done();
	  }, 500);
  });

  it("should not show validation when Author is filled in", function(done) {
    resetFields();
    setAuthor();
    Meteor.setTimeout(function(){
      expect($('.parsley-required').text()).not.toEqual("Author can't be empty.");
      done();
    }, 500);
  });
});