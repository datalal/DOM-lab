var listItems = document.getElementsByTagName('li');


// var test = document.createElement("p");
// test.textContent = "this is some content";
// document.body.appendChild(test);


var basket2 = {
    name: "Pizza",
    price: 10,
    quantity: 0
};
var basket3 = {
    name: "Chips",
    price: 4,
    quantity: 0
};
var basket4 = {
    name: "Ice Cream",
    price: 5,
    quantity: 0
};
var basket5 = {
    name: "Guac",
    price: 7,
    quantity: 0
};
var basket6 = {
    name: "Salsa",
    price: 3.50,
    quantity: 0
};
var basket7 = {
    name: "OJ",
    price: 5,
    quantity: 0
};
var basket8 = {
    name: "Cheese",
    price: 5.50,
    quantity: 0
};
var basket9 = {
    name: "Bread",
    price: 2.50,
    quantity: 1
};
var basket10 = {
    name: "Water",
    price: 1.99,
    quantity: 0
};


var shoppingCart = [basket2, basket3, basket4, basket5, basket6, basket7, basket8, basket9, basket10 ];

var displayTotal = document.createElement("p");

var sum = 0;
var total = 0;
// var quantity = 1;
// var remove = "X";

for (i = 0; i < shoppingCart.length; i++){

 sum += (shoppingCart[i].price * shoppingCart[i].quantity);
 console.log(shoppingCart[i].name + " $" + shoppingCart[i].price);
  total = sum * .06;


};

// function showCart() {
//
// for(var i = 0; i < cart.length; i++){
// var itemSlot - document.createElement("p");
// itemSlot.textContent = cart[i].name + " $" + cart[i].price;
// shoppingCart.appendChild(itemSlot);
//
//   total += cart[i].price;
// }
//
// }
//
// function showPrice(){
//
// totalCost = document.getElementById("totalCost");
// shoppingCart
//
// }
//
//
// function addItem() {
//
// var newItem - document.getElementById("newItem").value;
// var newPrice = Number(document.getElementById("newPrice").value)
//
//   var newObj = {
// name: newItem,
// price: newPrice
//   };
//
//   cart.push(newObj);
//
//   var itemSlot = document.createElement("p");
//   itemSlot.textContent = newObj.name + "$" + newObj.price;
//   shoppingCart.appendChild(itemSlot);
// };

var add = document.createElement("button");
add.textContent = "+";
add.id = "addItem";
add.className = "addItem";
document.body.appendChild(add);
add.onclick = addFunction;

var sub = document.createElement("button");
sub.textContent = "-";
sub.id = "subItem";
sub.className = "subItem";
document.body.appendChild(sub);
sub.onclick = subFunction;

shoppingCart.forEach(function(items) {
    console.log(items.name + ", $" + items.price.toFixed(2));
    total += (items.price * items.quantity);
    items.quantity++;
  //  document.getElementsByTagName("BODY")[0].style.backgroundColor = "grey";

    // var itemName = document.createElement("p");
    // itemName.textContent = items.name;
    // document.body.appendChild(itemName);
    // itemName.className = "ItemName";
    //receiptContainer.style = "background-color: grey; width: 300px;";

    var itemPrice = document.createElement("p");
    var displayQuantity = document.createElement("p");
    // itemPrice.textContent = "$" + items.price;
    // document.body.appendChild(itemPrice);

    var itemFull = document.createElement("p");
    itemFull.textContent = items.quantity  +  " " + items.name + " $" + (items.price * items.quantity) + "    " + "-/+" + "    ";
    document.body.appendChild(itemFull);

  //  itemName.style = "background-color: grey; width: 300px;";

});

// document.body.style = "background-color: pink;";
function addFunction() {

shoppingCart.forEach(function(items) {
    console.log(items.name + ", $" + items.price.toFixed(2));
    total += (items.price * items.quantity);
    items.quantity++;
  //  document.getElementsByTagName("BODY")[0].style.backgroundColor = "grey";

    // var itemName = document.createElement("p");
    // itemName.textContent = items.name;
    // document.body.appendChild(itemName);
    // itemName.className = "ItemName";
    //receiptContainer.style = "background-color: grey; width: 300px;";

    var itemPrice = document.createElement("p");
    var displayQuantity = document.createElement("p");
    // itemPrice.textContent = "$" + items.price;
    // document.body.appendChild(itemPrice);

    var itemFull = document.createElement("p");
    itemFull.textContent = items.quantity  +  " " + items.name + " $" + (items.price * items.quantity) + "    " + "-/+" + "    ";
    document.body.appendChild(itemFull);

  //  itemName.style = "background-color: grey; width: 300px;";




});

displayTotal.textContent = "Total $" + Math.round((sum * 0.06) + sum);
document.body.appendChild(displayTotal);

}

function subFunction() {

shoppingCart.forEach(function(items) {
    console.log(items.name + ", $" + items.price.toFixed(2));
    total += items.price;
    items.quantity--;
  //  document.getElementsByTagName("BODY")[0].style.backgroundColor = "grey";

    // var itemName = document.createElement("p");
    // itemName.textContent = items.name;
    // document.body.appendChild(itemName);
    // itemName.className = "ItemName";
    //receiptContainer.style = "background-color: grey; width: 300px;";

    var itemPrice = document.createElement("p");
    var displayQuantity = document.createElement("p");
    // itemPrice.textContent = "$" + items.price;
    // document.body.appendChild(itemPrice);

    var itemFull = document.createElement("p");
    itemFull.textContent = items.quantity  +  " " + items.name + " $" + (items.price * items.quantity) + "    " + "-/+" + "    ";
    document.body.appendChild(itemFull);

  //  itemName.style = "background-color: grey; width: 300px;";



});

displayTotal.textContent = "Total $" + Math.round((sum * 0.06) + sum);
document.body.appendChild(displayTotal);

}

// remove.onclick = myFunction;
// window.onclick = myFunction;

// If the user clicks in the window, set the background color of <body> to yellow
//function myFunction() {
  //  document.getElementsByTagName("BODY")[0].style.backgroundColor = "grey";
  //  document.getElementById("removeItem").style.color = "red";
  //  return quantity++;




// }


var receiptPaper = document.createElement("div");
receiptPaper.id = "receiptContainer";
receiptPaper.className = "receiptPaper"
document.body.appendChild(receiptPaper);
var totalCost = document.createElement("p");
totalCost.id = "totalCost";
receiptPaper.appendChild(totalCost);


var receiptContent = document.getElementById("receiptContainer");

var displaySubTotal = document.createElement("p");
displaySubTotal.textContent = "Subtotal $" + sum;
document.body.appendChild(displaySubTotal);
displaySubTotal.className = "SubTotal";
// displaySubTotal.style = "background-color: pink; width: 300px;"


var displayTax = document.createElement("p");
displayTax.textContent = "Tax $" + Math.round((sum * 0.06));
document.body.appendChild(displayTax);

var lineBreak = document.createElement("p");
lineBreak.textContent = "_________________________";
document.body.appendChild(lineBreak);


var displayTotal = document.createElement("p");
displayTotal.textContent = "Total $" + Math.round((sum * 0.06) + sum);
document.body.appendChild(displayTotal);
//displayTotal.className = "Total";
// displayTotal.style = "background-color: pink; width: 300px;"




// console.log ("Your total is $" + total.toFixed(2));
