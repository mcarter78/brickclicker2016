function BricksCtrl($scope) {
  $scope.data = [
    {name: "Matthew Carter"},
    {name: "Bob"},
    {name: "Carl"}
  ];
  $scope.name = '';
  $scope.image = '../img/trump1.png';
  $scope.addBrick = function() {
    console.log($scope.name);
    $scope.data.push({name:$scope.name});
    $scope.name = '';
    $scope.checkImage($scope.data.length);
  };
  $scope.checkImage = function(num) {
    if((num < 20) || (num >= 80 && num < 140)) {
      $scope.image = '../img/trump1.png';
      $scope.$apply();
    }
    else if((num >= 20 && num < 40) || (num >= 140 && num < 200)) {
      $scope.image = '../img/trump2.png';
      $scope.$apply();
    }
    else if((num >= 40 && num < 60) || (num >= 200 && num < 260)) {
      $scope.image = '../img/trump3.png';
      $scope.$apply();
    }
    else if((num >= 60 && num < 80) || (num >= 260)) {
      $scope.image = '../img/trump4.png';
      $scope.$apply();
    }
  };
  $scope.waitForBrick = function() {
    var brickForm = document.getElementById('brick-form');
    brickForm.addEventListener('submit', function(e) {
      e.preventDefault();
      $scope.addBrick();
    });
  };
  $scope.waitForBrick();
}
