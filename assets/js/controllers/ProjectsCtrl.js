app.controller('ProjectsCtrl', ['$scope', '$window', '$routeParams', 'dataFactory', function ($scope, $window, $routeParams, dataFactory) {
    dataFactory.getProjects()
        .success(function (data) {
            $scope.projects = data;
        })
        .error(function (error) {});
}]);