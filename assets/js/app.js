var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider
  	.when('/',
        {
          controller: 'IndexCtrl',
          templateUrl: 'partials/index.html'
        })
    .when('/projects',
        {
          controller: 'ProjectsCtrl',
          templateUrl: 'partials/projects.html'
        })
    .when('/project/:code',
        {
          controller: 'ProjectCtrl',
          templateUrl: 'partials/project.html'
        })
    .when('/about',
        {
          controller: 'AboutCtrl',
          templateUrl: 'partials/about.html'
        })
    .otherwise({redirectTo: '/'})
});