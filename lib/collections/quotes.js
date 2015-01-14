Quotes = new Mongo.Collection('quotes'); 

Meteor.methods({
  getQuoteCount: function () {
    return Quotes.find().count();
  },
  quoteInsert: function(quoteAttributes) {    
		check(quoteAttributes, {      
			quote: String,      
			author: String    
		}); 

		Quotes.insert(quoteAttributes);

    // var errors = validatePost(postAttributes);    
    // if (errors.title || errors.url)      
    // 	throw new Meteor.Error('invalid-post', 
    // 		"You must set a title and URL for your post");

    // var postWithSameLink = Posts.findOne({url: postAttributes.url});    
    // if (postWithSameLink) {      
    // 	return {        
    // 		postExists: true,        
    // 		_id: postWithSameLink._id      
    // 	}    
    // }

		// var user = Meteor.user();    
		// var post = _.extend(postAttributes, {      
		// 	userId: user._id,       
		// 	author: user.username,       
		// 	submitted: new Date(),
		// 	commentsCount: 0,      
	 //    upvoters: [],       
	 //    votes: 0
		// });    
		// var postId = Posts.insert(post);    
		// return {      
		// 	_id: postId    
		// };  
	}
});
