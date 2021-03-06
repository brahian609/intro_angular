(function () {
    'user strict';

    angular.module('app.components.perfil').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('perfil', {
                url: '/perfil',
                controller: 'PerfilController',
                controllerAs: 'ctrl',
                templateUrl: 'components/github/perfil.html'
            });
    }

}());

