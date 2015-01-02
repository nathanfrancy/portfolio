app.controller('AboutCtrl', ['$scope', '$window', '$routeParams', 'aboutFactory', function ($scope, $window, $routeParams, aboutFactory) {
    aboutFactory.getMyAttributes()
        .success(function (data) {
            $scope.data = data;
        })
        .error(function (error) {});
}]);