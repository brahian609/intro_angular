(function () {
    'user strict';

    angular.module('app.components.users').service('UsersService',UsersService);

    UsersService.$inject = ['$q', '$http'];

    function UsersService($q, $http) {

        this.getPeople = getPeople;

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
