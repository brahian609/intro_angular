(function () {
    'user strict';

    class UsersService {

        constructor($q, $http){
            this.$q = $q;
            this.$http = $http;
        }

        getPeople() {
            return this.$http.get('server/people.json').then(function (response) {
                return response;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }

    UsersService.$inject = ['$q', '$http'];

    angular.module('app.components.users').service('UsersService',UsersService);

}());
