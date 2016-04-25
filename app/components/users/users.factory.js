(function () {
    'user strict';

    angular.module('app.components.users').factory('usersFactory',usersFactory);

    usersFactory.$inject = ['$q', '$http'];

    function usersFactory($q, $http) {

        /**var users = [
            {name: 'Brahian', last_name: 'Giraldo', money: 20000},
            {name: 'Pedro', last_name: 'Medina', money: 15000},
            {name: 'Pablo', last_name: 'Peres', money: 10000}
        ];*/

        return {
            //getPeople: getPeople si el nombre del valor es el mismo de la clave se deja la clave
            getPeople
        };

        function getPeople() {
            return $http.get('server/people.json').then(function (response) {
                return response;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }


}());
