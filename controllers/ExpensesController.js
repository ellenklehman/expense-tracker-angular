expenseTracker.controller('ExpensesCtrl', function ExpensesCtrl($scope, $stateParams, CategoriesFactory, UtilitiesFactory) {
  $scope.category = UtilitiesFactory.findById(CategoriesFactory.categories, $stateParams.categoryId)
  $scope.addExpense = function() {
    $scope.category.expenses.push({ name: $scope.expenseName });
    $scope.expenseName = null;
  };
});
