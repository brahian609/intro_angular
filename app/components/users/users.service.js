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
                return data.filter(user => user.id === Number(id))[0];
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

        getFrameworks() {
            return this.$http({
                method: 'GET',
                url: 'http://192.168.80.59:1989/frameworks'
            }).then(function (response) {
                return response.data;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }

    UsersService.$inject = ['$q', '$http'];

    angular.module('app.components.users').service('UsersService',UsersService);

}());
