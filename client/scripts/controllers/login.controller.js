angular
	.module('Lightchat')
	.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location, $filter, $rootScope, $translate) {

	$rootScope.translate = $translate;
	$rootScope.changeLanguage = function(language) {
		$rootScope.translate.use(language);
	};

	this.login = login;

	var teste = $filter('translate')('LOGIN_BUTTON_LABEL');
	console.log($filter);
	console.log(teste);

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
