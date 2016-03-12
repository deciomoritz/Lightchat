angular.module('Lightchat')
    .controller('ChatListCtrl', ChatListCtrl);

if(Meteor.isClient){
    // Meteor.subscribe("chats");
}

function ChatListCtrl($location, $scope) {
    var vm = this;

    Tracker.autorun(function(){
        vm.allChats = Chats.find().fetch();
        if (!$scope.$$phase){$scope.$apply();}
    });

    vm.chat = function($name) {
        $location.path('/chat/:'.concat($name));
    }

    vm.newChat = function($name) {
        if(!$name){return;}

        let element = Chats.findOne({name: $name})

        if(!element){
            Chats.insert({
                name: $name,
                numMembers: 0
            });
        }

        vm.allChats = Chats.find().fetch();
    }
}
