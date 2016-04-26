(function () {
    'user strict';
    
    class PerfilController {
        
        constructor($scope,$timeout, PerfilService){

            this.PerfilService = PerfilService;

            PerfilService.getPerfil().then(({data}) => this.perfil = data);

        }

        getRepos(){

            this.PerfilService.getReposs().then(({data}) => this.repos = data);

        }
        
    }

    PerfilController.$inject = ['$scope', '$timeout', 'PerfilService'];

    angular.module('app.components.perfil').controller('PerfilController', PerfilController);

}());