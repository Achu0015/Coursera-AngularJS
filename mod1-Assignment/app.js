//Using IIFE
function({
  'using strict';
  angular.module('LaunchCheck', [])
  .controller('LanuchCheckController',LaunchCheckController);
  LaunchCheckController.$inject = ['$scope'];

function LaunchCheckController($scope){
  $scope.msg="";
  $scope.textStyle=();
  $scope.borderStyle=();

  $scope.displayMsg = function(){
    var itemCount = calculateItems($scope.items);
    $scope.textStyle = {"color":"green"};
    $scope.borderStyle = {"border":"solid green"};

    if(itemCount===0){
      $scope.msg="Please enter data first";
      $scope.textStyle = {"color":"red"};
      $scope.borderStyle = {"border":"solid red"};
    }else if(itemCount<=3){
      $scope.msg="Enjoy !";
    }else{
      $scope.msg="Too much !";
    }
  };
  function calculateItems(string){
    var separator = ',';
    var itemCount = 0;
    if(typeof string!='undefined' && string!=''){
      var items = string.split(separator);
      for(var i=0;i<items.length;i++){
        if(items[i]!=''){
          itemCount++;
        }
      }
    }
    return itemCount;
  }
}

})();
