angular
  .module('Lightchat')
  .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl($stateParams, $location, $scope) {
      var vm = this;

      let chatId = $stateParams.chatId.slice(1);

      $scope.chatName = "";

      Tracker.autorun(function(){
          vm.chat = Chats.findOne({_id: chatId});
          if (!$scope.$$phase){$scope.$apply();}
          $scope.chatName = vm.chat.name;
      });

      Tracker.autorun(function(){
          vm.allMessages = Messages.find().fetch();
          if (!$scope.$$phase){$scope.$apply();}
      });

      vm.sendMessage = function($messageContent) {
          if(!$messageContent){return;}

          Messages.insert({
              text: $messageContent,
              sentAt: new Date(),
              chatId: chatId
          });

          vm.allMessages = Messages.find().fetch();
      }
  }
