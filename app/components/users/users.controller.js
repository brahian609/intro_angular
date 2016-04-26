(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout, UsersService, versions, $state){

            this.$state   = $state;
            this.versions = versions;

            UsersService.getPeople().then(({data}) => this.users = data);

            console.log("this.users");
            console.log(this.users);

        }

        goProfile(id){
            this.$state.go('users.profile', {id});
        }
        
    }

    UsersController.$inject = ['$scope', '$timeout', 'UsersService', 'versions', '$state'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());