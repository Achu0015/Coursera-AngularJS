//Using IIFE
(function(){
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";
$scope.CheckTooMuch = function(){
    var noDishes = $scope.dishes.split(',')
    if (noDishes == 0){
        $scope.message = "Please enter data first";
    }
    else if (noDishes.length > 3){
       $scope.message = "Too much!";
    }
    else {
        $scope.message="Enjoy";
    }
}
};
})();

/*function({
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
*/
