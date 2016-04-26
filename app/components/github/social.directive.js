/**
 * directivas en angular
 */

(function () {
    'user strict';

    angular.module('app.components.perfil').directive('social', social);

    social.$inject = [];

    function social(){
        //DDO (Directive Definition Object)
        return {
            template:`
                <h1>Social</h1>
                <div>
                    <p>directiva</p>
                </div>
            `,
            link

        };

        function link(scope, element, attrs) {

        }

    }

}());
