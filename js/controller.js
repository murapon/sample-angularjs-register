angular.module('myApp')
    .controller('MyController', ['$scope', 'UserRegisterService',
        function($scope, UserRegisterService) {
            $scope.show_input=true;
            $scope.conf = function() {
                UserRegisterService.conf($scope);
            }
            $scope.comp = function() {
                UserRegisterService.comp($scope);
                $scope.show_conf=false;
                $scope.show_comp=true;
            }
        }
    ]);