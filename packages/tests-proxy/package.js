Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.onUse(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/jasmine/client/integration/_assert_helper.js",["client"]);
	api.add_files("tests/jasmine/client/integration/_wait_for_router_helper.js",["client"]);
	api.add_files("tests/jasmine/client/integration/navigation_spec.js",["client"]);
	api.add_files("tests/jasmine/client/integration/quotes/add-quote/add_duplicate_quote_spec.js",["client"]);
	api.add_files("tests/jasmine/client/integration/quotes/add-quote/add_quote_spec.js",["client"]);
	api.add_files("tests/jasmine/client/integration/quotes/add-quote/validation_spec.js",["client"]);
	api.add_files("tests/jasmine/client/integration/quotes/view-quote/next_quote_spec.js",["client"]);
	api.add_files("tests/jasmine/client/integration/quotes/view-quote/page_spec.js",["client"]);
});