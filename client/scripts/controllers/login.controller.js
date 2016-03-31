angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {

	this.login = login;

	function login() {
		Meteor.loginWithGoogle();

		Tracker.autorun(function(){
			user = getUserById(Meteor.userId());
		});
		$location.path('/chat-list');
		console.log('logando');
	}
}
