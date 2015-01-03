app.controller('ProjectsCtrl', ['$scope', '$window', '$routeParams', '$sce', 'dataFactory', function ($scope, $window, $routeParams, $sce, dataFactory) {
    dataFactory.getProjects()
        .success(function (data) {
            $scope.projects = data;
        })
        .error(function (error) {});
}]);