expenseTracker.controller('CategoriesCtrl', function CategoriesCtrl($scope, CategoriesFactory, UtilitiesFactory) {
  $scope.categories = CategoriesFactory.categories;
  $scope.CategoriesFactory = CategoriesFactory;
});
