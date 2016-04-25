(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout, usersFactory, versions){

            console.log("usersFactory");
            console.log(usersFactory);
            console.log("versions");
            console.log(versions);

            this.versions = versions;
            usersFactory.getPeople().then((response) => {
                console.log("--- succcess ---");
                console.log(response);
                this.users = response.data;
            });

            console.log("this.users");
            console.log(this.users);

        }
        
    }

    UsersController.$inject = ['$scope', '$timeout', 'usersFactory', 'versions'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());