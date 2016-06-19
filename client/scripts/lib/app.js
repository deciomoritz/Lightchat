var app = angular
	.module(
		'Lightchat', [
	    'angular-meteor',
	    'ionic',
		'pascalprecht.translate'
  	]);

app.config([
	'$translateProvider',
	function translationConfigFn($translateProvider) {
		$translateProvider.useStaticFilesLoader({
			prefix: 'locale/',
			suffix: '.json'
		});
		$translateProvider.preferredLanguage('pt-BR');
	}
]);

//Use lodash instead of underscore
_ = lodash;

Tracker.autorun(function(){
	getUserById = function(id) {
		userReg = Meteor.users.findOne({_id: id});
		var u;
		if(userReg){
			u =  userReg.services.google;
		}
		return u;
	}
});

user = getUserById(Meteor.userId());

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['Lightchat']);
}
