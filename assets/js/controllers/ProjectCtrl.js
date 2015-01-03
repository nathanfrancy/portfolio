app.controller('ProjectCtrl', ['$scope', '$window', '$routeParams', '$sce', 'dataFactory', function ($scope, $window, $routeParams, $sce, dataFactory) {
    var code = $routeParams.code;
    var project;
    
    dataFactory.getProjects()
        .success(function (data) {
            for (var i = 0; i < data.length; i++){
                if (data[i].code === code){
                    project = {
                        code : data[i].code,
                        title : data[i].title,
                        description : data[i].description,
                        description_trusted : $sce.trustAsHtml(data[i].description),
                        link_live : data[i].link_live,
                        link_github : data[i].link_github,
                        images : data[i].images,
                        skills : data[i].skills,
                        color : data[i].color,
                        bg : data[i].bg
                    };
                    $scope.project = project;
                }
            }
        })
        .error(function (error) {});
}]);