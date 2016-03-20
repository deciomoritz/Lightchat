angular
  .module('Lightchat')
  .controller('ChatCtrl', ChatCtrl);

$('html,body').animate({ scrollTop: 9999 }, 'slow');

  function ChatCtrl($stateParams, $location, $scope) {
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
      });

      vm.sendMessage = function($messageContent) {
          if(!$messageContent){return;}

          Messages.insert({
              text: $messageContent,
              sentAt: new Date(),
			  sentBy: Meteor.userId(),
              chatId: chatId
          });
		  $("#input").animate({ scrollTop: $("#input")[0].scrollHeight }, 1000);
      }
  }
