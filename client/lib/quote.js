var oldSubscription, subscription;

getQuote = function () {
  Meteor.call('getQuoteCount', function (err,count) {
    if(!err) {
      var skip = Math.floor(Math.random() * count);
      subscription = Meteor.subscribe('randomQuote', skip, function () {
        if(oldSubscription)
          oldSubscription.stop();
        oldSubscription = subscription;
      });
    }
  });
};

