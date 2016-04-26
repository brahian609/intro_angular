(function () {
    'user strict';
    
    class UserProfileController {
        
        constructor($timeout, UsersService, $stateParams){
            var id = $stateParams.id;
            UsersService.getUser(id).then(response => {
                this.user = response;
            });

            UsersService.getFrameworks().then(response => this.frameworks = response);

        }
        
    }

    UserProfileController.$inject = ['$timeout', 'UsersService', '$stateParams'];

    angular.module('app.components.users').controller('UserProfileController', UserProfileController);

}());