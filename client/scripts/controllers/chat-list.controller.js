angular.module('Lightchat')
    .controller('ChatListCtrl', ChatListCtrl);

if(Meteor.isClient){
    // Meteor.subscribe("chats");
}

function ChatListCtrl($location, $scope) {
    var vm = this;

	var x = Meteor.users.findOne({});
	console.log(x.services.google.given_name);
	console.log(x.services.google.email);

	console.log(user.given_name);
	console.log(user.email);

    Tracker.autorun(function(){
        vm.allChats = Chats.find().fetch();
        if (!$scope.$$phase){$scope.$apply();}
    });

    vm.goToChat = function($name) {
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
