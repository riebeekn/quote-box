Meteor.publish('randomQuote', function (numToSkip) {
  check(numToSkip, Number);
  return Quotes.find({approved: true}, {limit: 1, skip: numToSkip});
});

Meteor.publish('quoteCount', function() {
  Counts.publish(this, 'quoteCount', Quotes.find({approved: true}));
});