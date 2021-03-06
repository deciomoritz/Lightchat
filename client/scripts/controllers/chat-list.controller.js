angular.module('Lightchat')
    .controller('ChatListCtrl', ChatListCtrl);

if(Meteor.isClient){
    // Meteor.subscribe("chats");
}

function ChatListCtrl($location, $scope, $translate) {
    var vm = this;

	vm.changeLanguage = function(language) {
		$translate.use(language);
	};

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
