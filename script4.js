var basket1 = [
  {name: 'Milk',
   price: 3},
  {name: 'Water',
   price: 1},
  {name: 'Apple Juice',
   price: 4},
{name: 'Soda',
   price: 3},
{name: 'Beer',
   price: 6},
{name: 'Pizza',
   price: 20}];

   var total = 0;

totalCost();

showCart();

var sum = 0;


function showCart() {

for (i = 0; i < basket1.length; i++){


var itemSlot = document.createElement("p");
itemSlot.textContent = basket1[i].name + " $" + basket1[i].price;
cartContainer.appendChild(itemSlot);
total += basket1[i].price;

};

// var totalPrice = document.createElement("p");
// totalPrice.textContent = "TOTAL: $" + total;
// cartContainer.appendChild(totalPrice);


};

function addItem() {

var newItem = document.getElementById("newItem").value;
var newPrice = Number(document.getElementById("newPrice").value);

var newObj = {
name: newItem,
price: newPrice};

  basket1.push(newObj);

  var itemSlot = document.createElement("p");
  itemSlot.textContent = newObj.name + " $" + newObj.price;
  cartContainer.appendChild(itemSlot);
  total += newObj.price;
  console.log(total);
  // totalPrice.textContent = "TOTAL: $" + total;



};


function totalCost(){

for (i = 0; i < basket1.length; i++){
// console.log(basket1[i].price);
total += basket1[i].price;
// total += basket1[i].price;
console.log(total);
}

var totalPrice = document.createElement("p");
totalPrice.textContent = "TOTAL: $" + total;
cartContainer.appendChild(totalPrice);

};

// function costUpdate(){
//
// var total = 0;
//
// for (i = 0; i < basket1.length; i++){
//
// total += basket1[i].price;
//
// };
//
// // var totalPrice = document.createElement("p");
// totalPrice.textContent = "TOTAL: $" + total;
// cartContainer.appendChild(totalPrice);
//
//
// };
