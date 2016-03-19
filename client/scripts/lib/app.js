angular
    .module('Lightchat', [
    'angular-meteor',
    'ionic'
  ]);

//Use lodash instead of underscore
_ = lodash;

userReg = Meteor.users.findOne({_id: Meteor.userId()});

if(userReg){
	user =  userReg.services.google;
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['Lightchat']);
}
