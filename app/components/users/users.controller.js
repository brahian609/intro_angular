(function () {
    'user strict';

    angular.module('app.components.users').controller('UsersController', UsersController);

    UsersController.$inject = ['$scope', '$timeout'];

    function UsersController($scope, $timeout) {

        this.users = [
            {name: 'Brahian', last_name: 'Giraldo', money: 20000},
            {name: 'Pedro', last_name: 'Medina', money: 15000},
            {name: 'Pablo', last_name: 'Peres', money: 10000}
        ];

    }

}());