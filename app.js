(function () {
  angular
    .module("LunchCheckApp", [])
    .controller("LunchCheckController", lunchController);

  lunchController.$inject = ["$scope"];

  function lunchController($scope) {
    $scope.items = "";
    $scope.meesage;

    $scope.checkIfTooMuch = function () {
      if ($scope.items !== "") {
        var itemsList = $scope.items.split(",");
      }

      if ($scope.items == "") {
        $scope.message = "Please enter data first";
      } else if (itemsList.length <= 3 && itemsList.length > 0) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };

    $scope.getStyle = function () {
      if ($scope.message) {
        if ($scope.message == "Enjoy!" || $scope.message == "Too much!") {
          return "green";
        } else {
          return "red";
        }
      }
    };
  }
})();
