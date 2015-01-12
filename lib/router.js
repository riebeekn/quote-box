Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.map(function() {
	this.route('viewQuote', {
		path: '/',
		template: 'viewQuote'
	});
});

Router.onBeforeAction('loading');
