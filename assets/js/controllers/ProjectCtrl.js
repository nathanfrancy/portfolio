app.controller('ProjectCtrl', ['$scope', '$window', '$routeParams', 'dataFactory', function ($scope, $window, $routeParams, dataFactory) {
    var code = $routeParams.code;
    var project;
    
    dataFactory.getProjects()
        .success(function (data) {
        
            /**
             * Get all projects, then search for the code provided in the URL, put the project into the scope */
            $scope.projects = data;
            for (var i = 0; i < $scope.projects.length; i++){
                if ($scope.projects[i].code === code){
                    project = {
                        code : $scope.projects[i].code,
                        title : $scope.projects[i].title,
                        description : $scope.projects[i].description,
                        link_live : $scope.projects[i].link_live,
                        link_github : $scope.projects[i].link_github,
                        images : $scope.projects[i].images,
                        skills : $scope.projects[i].skills,
                        color : $scope.projects[i].color,
                        bg : $scope.projects[i].bg
                    };
                    $scope.project = project;
                }
            }
        })
        .error(function (error) {});
}]);