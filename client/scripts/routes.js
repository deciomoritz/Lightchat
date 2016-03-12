angular.module("Lightchat").config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('login', {
       url: '/login',
       templateUrl: 'client/templates/login.html',
       controller: 'LoginCtrl as logger'
     })
     .state('chat-list', {
       url: '/chat-list',
       templateUrl: 'client/templates/chat-list.html',
       controller: 'ChatListCtrl as picker'
     })
     .state('chat', {
       url: '/chat/:chatId',
       templateUrl: 'client/templates/chat.html',
       controller: 'ChatCtrl as chatter'
     })
     ;
  $urlRouterProvider.otherwise('/login');
}
