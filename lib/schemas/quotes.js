Quotes.attachSchema(new SimpleSchema({
	author: {
		type: String,
		label: "Author",
		max: 80
	},
 
	quote: {
		type: String,
		label: "Quote",
		index: true,
		unique: true
	},

	approved: {
		type: Boolean
	}
})); 