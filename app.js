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
      url: "/:categoryId",
      templateUrl: "partials/categories.detail.html",
      controller: 'ExpensesCtrl'
    })
});
