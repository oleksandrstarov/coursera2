"use strict";

(function(){
  angular.module('app', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(service){
  var controller = this;
  controller.items = service.getToBuyList();
  controller.buyItem = function(index){
    service.itemBought(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(service){
  var controller = this;
  controller.items = service.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuy = [ {item: 'Cookie', quantity: 10},
    {item: 'Milk', quantity: 2},
    {item: 'Bread', quantity: 1},
    {item: 'Butter', quantity: 250},
    {item: 'Meat', quantity: 1000}
  ];

  var boughtItems = [];

  service.getToBuyList = function(){
    return toBuy;
  };
  service.itemBought = function(index){
    boughtItems.push(toBuy.splice(index, 1)[0]);
  };
  service.getBoughtItems = function(){
    return boughtItems;
  };
}

})();
