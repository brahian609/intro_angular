(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout, usersFactory, versions){

            console.log("usersFactory");
            console.log(usersFactory);
            console.log("versions");
            console.log(versions);  

            this.versions = versions;

            this.users = [
                {name: 'Brahian', last_name: 'Giraldo', money: 20000},
                {name: 'Pedro', last_name: 'Medina', money: 15000},
                {name: 'Pablo', last_name: 'Peres', money: 10000}
            ];

        }
        
    }

    UsersController.$inject = ['$scope', '$timeout', 'usersFactory', 'versions'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());