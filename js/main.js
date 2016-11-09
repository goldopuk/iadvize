angular.module('iAdvise', [])
    .controller('ChatController', ['$scope', function ($scope) {

        $scope.messages = [];

        $scope.send = function (username, message) {
            var messageObj = {
                username: username,
                message: message
            };

            $scope.messages.push(messageObj);

            $scope.inputs[username] = '';
        }
    }]);

angular.bootstrap(document, ['iAdvise']);