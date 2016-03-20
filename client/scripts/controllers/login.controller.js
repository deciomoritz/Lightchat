angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {

	this.login = login;

	function login() {
		Meteor.loginWithGoogle();

		Tracker.autorun(function(){
			user = getUserById(Meteor.userId());
			console.log(user);
			$location.path('/chat-list');
		});
	}
}
