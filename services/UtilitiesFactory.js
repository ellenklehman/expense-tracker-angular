expenseTracker.factory('UtilitiesFactory', function() {
  return {
    findById: function(categories, id) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id == id)
        return categories[i];
      }
      return null;
    }
  };
});
