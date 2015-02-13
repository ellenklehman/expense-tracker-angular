var expenseTracker = angular.module('expenseTracker', ['ui.router']);

expenseTracker.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/categories");

  $stateProvider
    .state('categories', {
      url: "/categories",
      templateUrl: "partials/categories.html",
      controller: 'CategoriesCtrl'
    })

    .state('categories.detail', {
      url: "/:id",
      templateUrl: "partials/categories.detail.html",
      controller: function($scope, $stateParams) {
        $scope.categoryId = parseInt($stateParams.id)
        $scope.category = $scope.categories[categoryId]
      }
    })
});

expenseTracker.controller('CategoriesCtrl', function CategoriesCtrl($scope) {
  $scope.categories = [{"name" : "Food"}, {"name" : "Home"}, {"name" : "Work"}];
  $scope.addCategory = function() {
    $scope.categories.push({ "name": $scope.categoryName });
    $scope.categoryName = null;
  };
});
