(function () {
    'user strict';
    
    class PerfilController {
        
        constructor($scope,$timeout, PerfilService){


            PerfilService.getPerfil().then(({data}) => this.perfil = data);

            console.log("this.perfil");
            console.log(this.perfil);

        }
        
    }

    PerfilController.$inject = ['$scope', '$timeout', 'PerfilService'];

    angular.module('app.components.github.perfil').controller('PerfilController', PerfilController);

}());