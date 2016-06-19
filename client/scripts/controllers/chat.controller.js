angular
  .module('Lightchat')
  .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl($stateParams, $location, $scope, $ionicScrollDelegate, $filter, $translate, $rootScope) {
      var vm = this;

      let chatId = $stateParams.chatId.slice(1);

	  vm.changeLanguage = function(language) {
		  $translate.use(language);
		  vm.updateMessages();
	  };

      $scope.chatName = "";

      Tracker.autorun(function(){
          vm.chat = Chats.findOne({_id: chatId});
          if (!$scope.$$phase){$scope.$apply();}
          if(vm.chat){
              $scope.chatName = vm.chat.name;
          }
      });

	  vm.updateMessages = function() {
		  let messages = Messages.find({chatId: chatId}).fetch();

		  vm.allMessages = _.flatMap(messages, function(message) {
		  	var user = getUserById(message.sentBy);
		  	var format = 'dd/MM hh:mm';
		  	if($translate.use() === 'en-US'){
		  		var format = 'fullDate';
				console.log('deu ruim');
		  	}else{
				console.log('deu bom');
			}
		  	message.sentAt = $filter('date')(message.sentAt, format);
		  	return {message, user};
		  });
		  if (!$scope.$$phase){$scope.$apply();}
		  $ionicScrollDelegate.scrollBottom();
	  };

	  Tracker.autorun(function(){
		  vm.updateMessages();
      });

	  function send(){
		  let message = $scope.chatter.message;
		  if(message){
			  Messages.insert({
				  text: message,
				  sentAt: new Date(),
	  			  sentBy: Meteor.userId(),
				  chatId: chatId
			  });
		  }
		  $scope.chatter.message = "";
	  }

	  Mousetrap.bind('enter', function() {
		  send();
	  });

	  vm.sendMessage = function() {
		  send();
	  }
  }
