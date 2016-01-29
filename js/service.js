angular.module('myApp', []);
angular.module('myApp')
    .service('UserRegisterService', ['$log', '$http',
        function($log, $http) {
            this.conf = function($scope){
                // 入力チェック
                var error = new Array();
                if ($scope.name === undefined) {
                    $scope.name = "";
                }
                if ($scope.tel === undefined) {
                    $scope.tel = "";
                }
                error = check_name($scope.name, error);
                error = check_tel($scope.tel, error);
                if(error.length == 0){
                    $scope.name_conf = $scope.name;
                    $scope.tel_conf = $scope.tel;
                    $scope.show_conf=true;
                    $scope.show_input=false;
                } else {
                    $scope.error_messages = error;
                }
            }

            this.comp = function($scope){
                $result = $http({
                    method: 'POST',
                    url: 'user.php',
                    data: { name: $scope.name, tel: $scope.tel }
                })
                .success(function(data, status, headers, config){
                    $scope.result = "登録完了";
                })
                .error(function(data, status, headers, config){
                    $scope.result = '!!通信に失敗しました!!';
                });
            }

        }
    ]);
