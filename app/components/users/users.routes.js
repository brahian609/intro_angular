(function () {
    'user strict';

    angular.module('app.components.users').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('users', {
                url: '/users',
                controller: 'UsersController',
                controllerAs: 'ctrl',
                templateUrl: 'components/users/users.html'
            })
            .state('users.profile', {
                url: '/profile/:id',
                controller: 'UserProfileController',
                controllerAs: 'ctrlProfile',
                templateUrl: 'components/users/components/userProfile/userProfile.html'
            });
    }

}());

