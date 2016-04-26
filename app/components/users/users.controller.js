(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout, UsersService, versions, $state, users){

            this.$state   = $state;
            this.versions = versions;

            console.log("users");
            console.log(users);

            this.users = users;

        }

        goProfile(id){
            this.$state.go('users.profile', {id});
        }
        
    }

    UsersController.$inject = ['$scope', '$timeout', 'UsersService', 'versions', '$state', 'users'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());