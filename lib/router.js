Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {    
		return Meteor.subscribe('quoteCount');  
	}
});

Router.route('/', {
	name: 'home', 
	template: 'viewQuote',
	onBeforeAction: function() {
		document.title = "Quote Box - Home";
		this.next();
	}
});

Router.route('/quote/view', {
	name: 'viewQuote',
	template: 'viewQuote',
	onBeforeAction: function() {
		document.title = "Quote Box - Home";
		this.next();
	}
});

Router.route('/quote/add', {
	name: 'addQuote',
	template: 'addQuote',
	onBeforeAction: function() {
		document.title = "Quote Box - Add quote";
		this.next();
	}
});

Router.onBeforeAction('loading');
