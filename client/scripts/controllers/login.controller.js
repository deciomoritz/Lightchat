angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {
	Meteor.loginWithGoogle();

	Tracker.autorun(function(){
		user = getUserById(Meteor.userId());
	});
	$location.path('/chat-list');
}
