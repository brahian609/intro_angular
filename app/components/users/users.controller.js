(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout, UsersService, versions){

            console.log("UsersService");
            console.log(UsersService);
            console.log("versions");
            console.log(versions);

            this.versions = versions;

            UsersService.getPeople().then(({data}) => this.users = data);

            console.log("this.users");
            console.log(this.users);

        }
        
    }

    UsersController.$inject = ['$scope', '$timeout', 'UsersService', 'versions'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());