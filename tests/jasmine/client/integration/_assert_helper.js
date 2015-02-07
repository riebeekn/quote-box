

// NOTE: example of a helper we could create
// by not creating the method on the proto-type
// we can call it like a static method
// i.e. Assert.areEqual('title', 'Quote Box - Home', done);

/****************************
 * Assertion helper class
 ****************************/
Assert = function() {};

/*************************************************************
 * Checks for equality, usage:
 *	Assert.areEqual('title', 'Home', done);
 * 
 * Takes in an optional timeout parameter (defaults to 300):
 *  Assert.areEqual('title', 'Home', done, 5);
 *************************************************************/
Assert.areEqual = function(actual, expected, done, timeout) {
	var timeoutToUse = timeout ? timeout : 300;

	var isNumber = $.isNumeric(expected);

	if (isNumber) {
		checkNumber(actual, expected, done, timeoutToUse);
	} else {
		checkText(actual, expected, done, timeoutToUse);
	}
};

Assert.areNotEqual = function(actual, expected, done, timeout) {
	var timeoutToUse = timeout ? timeout : 300;

	var isNumber = $.isNumeric(expected);

	if (isNumber) {
		checkNumber(actual, expected, done, timeoutToUse);
	} else {
		checkText(actual, expected, done, timeoutToUse, true);
	}
};

Assert.isNotNull = function(val, done, timeout) {
	var timeoutToUse = timeout ? timeout : 300;

	Meteor.setTimeout(function(){
		expect($(val).text()).toBeTruthy(); // i.e. not empty
  	done();
  }, timeoutToUse);
}

var checkText = function(actual, expected, done, timeout, not) {
	Meteor.setTimeout(function() {
		if (not) {
			expect($(actual).text()).not.toEqual(expected);
		} else {
			expect($(actual).text()).toEqual(expected);
		}
		done();
	}, timeout);
}

var checkNumber = function(actual, expected, done, timeout) {
	Meteor.setTimeout(function() {
		expect(actual).toEqual(expected);
		done();
	}, timeout);
}