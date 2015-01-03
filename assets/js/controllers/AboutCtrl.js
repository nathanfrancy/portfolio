app.controller('AboutCtrl', ['$scope', '$window', '$routeParams', 'dataFactory', function ($scope, $window, $routeParams, dataFactory) {
    dataFactory.getMyAttributes()
        .success(function (data) {
            $scope.data = data;
        })
        .error(function (error) {});
}]);