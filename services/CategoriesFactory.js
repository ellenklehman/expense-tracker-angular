expenseTracker.factory('CategoriesFactory', function() {
  var factory = {};
  factory.categories = [];
  factory.addCategory = function() {
    factory.categories.push({ name: factory.categoryName, id: factory.categories.length + 1, expenses: [] });
    factory.categoryName = null;
  };

  return factory;
});
