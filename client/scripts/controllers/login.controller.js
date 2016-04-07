angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {

	this.login = login;

	function login() {
		options = {};

		if(Meteor.isCordova){
			options.loginStyle = "redirect";
		}

		Meteor.loginWithGoogle(options);

		Tracker.autorun(function(){
			user = getUserById(Meteor.userId());
		});
		$location.path('/chat-list');
		console.log('logando');
	}
}
