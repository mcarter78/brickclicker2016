function BricksCtrl($scope, $firebaseArray, $firebaseAuth) {
  var ref = new Firebase('https://intense-heat-346.firebaseio.com');
  auth = $firebaseAuth(ref);
  $scope.login = function() {
    $scope.authData = null;
    $scope.error = null;
    auth.$authAnonymously().then(function(authData) {
      $scope.authData = authData;
    }).catch(function(error) {
      $scope.error = error;
    });
    $scope.waitForBrick();
  };
  $scope.firebaseData = $firebaseArray(ref);
  $scope.data = [];
  $scope.image = '../img/trump1.png';
  $scope.addBrick = function() {
    $scope.data.push('click');
    $scope.firebaseData.$add({'data':'click'});
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
  $scope.login();
}
