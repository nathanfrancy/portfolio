angular.module('app').factory('dataFactory', ['$http', function($http) {
    var dataFactory = {};

    dataFactory.getMyAttributes = function () {
        return $http.get('/data/about.json');
    };
    
    dataFactory.getProjects = function () {
        return $http.get('/data/projects.json');
    };

    return dataFactory;
}]);