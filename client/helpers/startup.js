Meteor.startup(function () {

	// set-up any toaster option over-rides
  toastr.options = {
  	"positionClass": "toast-bottom-right"
  }

  // get the first quote to display 
  // when the app loads
  getQuote();
});