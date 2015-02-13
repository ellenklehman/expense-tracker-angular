var expenseTracker = angular.module('expenseTracker', ['ui.router']);

expenseTracker.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/categories");

  $stateProvider
    .state('categories', {
      url: "/categories",
      templateUrl: "partials/categories.html",
      controller: function($scope) {
        $scope.categories = ["Food", "Home", "Work"];
      }
    })

    .state('categories.detail', {
      url: "/:id",
      templateUrl: "partials/categories.detail.html",
      controller: function($scope, $stateParams) {
        categoryId = parseInt($stateParams.id)
        $scope.category = $scope.categories[categoryId]
      }
    })
});
