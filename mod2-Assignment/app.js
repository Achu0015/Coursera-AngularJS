(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController )
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  buy.boughtItem = function(itemIndex){
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;

  bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService(){
  var service = this;

  var itemsToBuy = [
    {name:"cokkies", quantity:150},
    {name:"chips", quantity:20},
    {name:"Hersheys", quantity:100},
    {name:"M&M's", quantity:100},
    {name:"Sprite", quantity:20}
  ];

  var itemsBought = [];


  service.boughtItem = function(itemIndex){
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex,1);
  };

  service.getItemsToBuy = function(){
    return itemsToBuy;
  };

  service.getItemsBought = function(){
    return itemsBought;
  };
}


})();
