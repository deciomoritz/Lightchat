angular
    .module('Lightchat', [
    'angular-meteor',
    // 'angular-route',
    'ionic'
  ]);

//Use lodash instead of underscore
_ = lodash;

user =  Meteor.users.findOne({}).services.google;

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['Lightchat']);
}
