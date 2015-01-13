Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('/', {
	name: 'home', 
	template: 'viewQuote'
});

Router.route('/quote/view', {
	name: 'viewQuote',
	template: 'viewQuote'
});

Router.route('/quote/add', {
	name: 'addQuote',
	template: 'addQuote'
});

Router.onBeforeAction('loading');
