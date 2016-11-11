angular.module('iAdvise', [])
    .controller('ChatController', ['$scope', function ($scope) {

        $scope.messages = [];
        $scope.userLeft = {name: 'Batman'};
        $scope.userRight = {name: 'Robin'};

        $scope.send = function (user) {

            var message = $scope.inputs[user];

            $scope.inputs[user] = '';

            var messageObj = {
                user: user,
                message: message
            };

            $scope.messages.push(messageObj);
        }
    }])
;

angular.bootstrap(document, ['iAdvise']);
