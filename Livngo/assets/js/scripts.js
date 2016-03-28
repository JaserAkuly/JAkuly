var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ui.router']);
app.controller('CollapseCtrl', function ($scope) {
  $scope.isCollapsed = true;
});

app.controller('MainCtrl', function($scope) {});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'views/home.html'
        },
        'header': {
          templateUrl: 'views/header.html'
        },
        'footer': {
          templateUrl: 'views/footer.html'
        }
      }
    });
  }]);
