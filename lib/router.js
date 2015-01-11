Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.map(function() {
	this.route('viewQuote', {
		path: '/',
		template: 'viewQuote',
		waitOn: function() {    
			return Meteor.subscribe('quotes')
		}
	});
});

Router.onBeforeAction('loading');