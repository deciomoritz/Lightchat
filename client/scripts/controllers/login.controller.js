angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location, $filter, $rootScope, $translate, $scope) {
	var vm = this;

	this.login = login;

	vm.changeLanguage = function(language) {
		$translate.use(language);
	};


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
