(function () {
    'user strict';
    
    class UsersController {
        
        constructor($scope,$timeout){

            this.users = [
                {name: 'Brahian', last_name: 'Giraldo', money: 20000},
                {name: 'Pedro', last_name: 'Medina', money: 15000},
                {name: 'Pablo', last_name: 'Peres', money: 10000}
            ];

        }
        
    }

    UsersController.$inject = ['$scope', '$timeout'];

    angular.module('app.components.users').controller('UsersController', UsersController);

}());