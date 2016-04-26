(function () {
    'user strict';

    class UsersService {

        constructor($q, $http){
            this.$q = $q;
            this.$http = $http;
        }

        getPeople() {
            return this.$http({
                method: 'GET',
                url: 'server/people.json'
            }).then(function (response) {
                return response;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

        getUser(id = null) {
            return this.$http({
                method: 'GET',
                url: 'server/people.json'
            }).then(function ({data}) {
                var user = data.filter(function (user) {
                    return user.id === Number(id);
                })[0];
                return user;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }

    UsersService.$inject = ['$q', '$http'];

    angular.module('app.components.users').service('UsersService',UsersService);

}());
