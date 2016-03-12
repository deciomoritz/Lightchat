angular.module('Lightchat')
    .controller('ChatListCtrl', ChatListCtrl);

function ChatListCtrl($location) {
    var vm = this;

    vm.allChats = vm.allChats = Chats.find().fetch();;

    vm.chat = function() {
        $location.path('/chat');
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
