angular
  .module('Lightchat')
  .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl($stateParams, $location, $scope, $ionicScrollDelegate) {
      var vm = this;

      let chatId = $stateParams.chatId.slice(1);

      $scope.chatName = "";

      Tracker.autorun(function(){
          vm.chat = Chats.findOne({_id: chatId});
          if (!$scope.$$phase){$scope.$apply();}
          if(vm.chat){
              $scope.chatName = vm.chat.name;
          }
      });

	  Tracker.autorun(function(){
		  let messages = Messages.find({chatId: chatId}).fetch();

		  vm.allMessages = _.flatMap(messages, function(message) {
			  var user = getUserById(message.sentBy);
			  return {message, user};
		  });
		  if (!$scope.$$phase){$scope.$apply();}
		  $ionicScrollDelegate.scrollBottom();
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
