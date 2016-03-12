angular
  .module('Lightchat')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($location) {

  this.login = login;

  function login() {
      $location.path('/chat-list');
  }
}
