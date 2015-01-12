Quotes = new Mongo.Collection('quotes'); 

Meteor.methods({
  getQuoteCount: function () {
    return Quotes.find().count();
  }
});