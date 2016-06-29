function BricksCtrl($scope) {
  $scope.data = [];
  $scope.image = '../img/trump1.png';
  $scope.addBrick = function() {
    $scope.data.push('click');
    $scope.checkImage($scope.data.length);
  };
  $scope.checkImage = function(num) {
    if((num < 30) || (num >= 120 && num < 200) || (num >= 480 && num < 1000) || (num >= 5000 && num < 9000)) {
      $scope.image = '../img/trump1.png';
      $scope.$apply();
    }
    else if((num >= 30 && num < 60) || (num >= 200 && num < 280) || (num >= 1000 && num < 1800) || (num >= 9000 && num < 17000)) {
      $scope.image = '../img/trump2.png';
      $scope.$apply();
    }
    else if((num >= 60 && num < 90) || (num >= 280 && num < 380) || (num >= 1800 && num < 3000) || (num >= 17000 && num < 33000)) {
      $scope.image = '../img/trump3.png';
      $scope.$apply();
    }
    else if((num >= 90 && num < 120) || (num >= 380 && num < 480) || (num >= 3000 && num < 5000) || (num >= 33000 && num < 65000)) {
      $scope.image = '../img/trump4.png';
      $scope.$apply();
    }
  };
  $scope.waitForBrick = function() {
    var brickBtn = document.getElementById('add-brick');
    brickBtn.addEventListener('click', function() {
      $scope.addBrick();
    });
  };
  $scope.add480 = function() {
    var btn = document.getElementById('add480');
    btn.addEventListener('click', function() {
      for(var i = 0; i < 960; i++) {
        $scope.addBrick();
      }
    });
  };
  $scope.waitForBrick();
  $scope.add480();
}
