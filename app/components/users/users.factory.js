(function () {
    'user strict';

    angular.module('app.components.users').factory('usersFactory',usersFactory);

    usersFactory.$inject = ['$q', '$http'];

    function usersFactory($q, $http) {

        return {
            message: 'hola mundo'
        };

    }


}());
