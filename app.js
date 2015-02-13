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

expenseTracker.controller('CategoriesCtrl', function CategoriesCtrl($scope, CategoriesFactory, utils) {
  $scope.categories = CategoriesFactory.categories;
  $scope.CategoriesFactory = CategoriesFactory;
});

expenseTracker.controller('ExpensesCtrl', function ExpensesCtrl($scope, $stateParams, CategoriesFactory, utils) {
  $scope.category = utils.findById(CategoriesFactory.categories, $stateParams.categoryId)
  $scope.addExpense = function() {
    $scope.category.expenses.push({ "name": $scope.expenseName });
    $scope.expenseName = null;
  };
});

expenseTracker.factory('utils', function() {
  return {
    findById: function findById(categories, id) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id == id) 
          return categories[i];
      }
      return null;
    }
  };
});

expenseTracker.factory('CategoriesFactory', function() {
  var factory = {};
  factory.categories = [];
  factory.addCategory = function() {
    factory.categories.push({ "name": factory.categoryName, "id": factory.categories.length + 1, "expenses": [] });
    factory.categoryName = null;
  };

  return factory;
});

