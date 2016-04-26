(function () {
    'user strict';

    angular.module('app.components.github.perfil').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('perfil', {
                url: '/perfil',
                controller: 'PerfilController',
                controllerAs: 'ctrl',
                templateUrl: 'components/github/perfil/perfil.html'
            });
    }

}());

