function BricksCtrl($scope) {
  $scope.data = [
    {name: "Matt"},
    {name: "Bob"},
    {name: "Carl"}
  ];
  $scope.image = '../img/trump1.png';
  $scope.addBrick = function() {
    $scope.data.push({name:'new'});
    $scope.checkImage($scope.data.length);
    console.log($scope.data.length);
  };
  $scope.checkImage = function(num) {
    if((num < 20) || (num >= 80 && num < 140)) {
      console.log('$scope.image =', $scope.image);
      $scope.image = '../img/trump1.png';
      $scope.$apply();
    }
    else if((num >= 20 && num < 40) || (num >= 140 && num < 200)) {
      console.log('$scope.image =', $scope.image);
      $scope.image = '../img/trump2.png';
      $scope.$apply();
    }
    else if((num >= 40 && num < 60) || (num >= 200 && num < 260)) {
      console.log('$scope.image =', $scope.image);
      $scope.image = '../img/trump3.png';
      $scope.$apply();
    }
    else if((num >= 60 && num < 80) || (num >= 260)) {
      console.log('$scope.image =', $scope.image);
      $scope.image = '../img/trump4.png';
      $scope.$apply();
    }
  };
  $scope.waitForBrick = function() {
    var brickBtn = document.getElementById('add-brick');
    brickBtn.addEventListener('click', function() {
      $scope.addBrick();
      $scope.buildWall();
    });
  };
  $scope.buildWall = function() {
    var wall = document.getElementById('wall');
    wall.innerHTML = '';
    $scope.data.forEach(function(item) {
      var div = document.createElement('div');
      if($scope.data.length < 80) {
        div.setAttribute('class', 'brick');
        wall.appendChild(div);
      }
      else {
        div.setAttribute('class', 'sm-brick');
        wall.appendChild(div);
      }
    });
    $scope.addTooltips();
  };
  $scope.addTooltips = function() {
    var bricks = document.getElementsByClassName('brick');
    var smBricks = document.getElementsByClassName('sm-brick');
    if(bricks.length > 0) {
      [].forEach.call(bricks, function(brick, index) {
        var tooltip = document.createElement('div');
        var name = document.createTextNode($scope.data[index].name);
        tooltip.setAttribute('class', 'tooltip');
        tooltip.appendChild(name);
        brick.appendChild(tooltip);
      });
    }
    else if(smBricks.length > 0) {
      [].forEach.call(smBricks, function(smBrick, index) {
        var tooltip = document.createElement('div');
        var name = document.createTextNode($scope.data[index].name);
        tooltip.setAttribute('class', 'tooltip');
        tooltip.appendChild(name);
        smBrick.appendChild(tooltip);
      });
    }
  };
  $scope.buildWall();
  $scope.waitForBrick();

}
