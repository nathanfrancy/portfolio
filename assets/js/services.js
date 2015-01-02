angular.module('app').factory('aboutFactory', ['$http', function($http) {
    var dataFactory = {};

    dataFactory.getMyAttributes = function () {
        return $http.get('/data/about.json');
    };

    return dataFactory;
}]);