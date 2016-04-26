(function () {
    'user strict';

    class PerfilService {

        constructor($q, $http){
            this.$q = $q;
            this.$http = $http;
        }

        getPerfil() {
            return this.$http({
                method: 'GET',
                url: 'https://api.github.com/users/brahian609'
            }).then(function (response) {
                return response;
            }, function (error) {
                console.log("--- error ---");
                console.log(error);
            });
        }

    }

    PerfilService.$inject = ['$q', '$http'];

    angular.module('app.components.github.perfil').service('PerfilService',PerfilService);

}());
