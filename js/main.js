angular.module('iAdvise', [])
    .controller('ChatController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';

        $scope.messages = [{username: 'batman', 'message': "salut"}, {username: 'robin', 'message': "salut"}];

        $scope.send = function (username, message) {
            var messageObj = {
                username: username,
                message: message
            }

            $scope.messages.push(messageObj);

            $scope.inputs[username] = '';
        }
    }]);

angular.bootstrap(document, ['iAdvise']);