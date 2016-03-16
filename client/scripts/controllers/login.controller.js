angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {

	this.login = login;

	function login() {
		Meteor.loginWithGoogle();
		var x = Meteor.users.find({});
		console.log(Meteor.userId());
		console.log(x.name);
		console.log(x.email);
        //   console.log(x);
      $location.path('/chat-list');
	}
}
