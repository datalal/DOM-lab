var listItems = document.getElementsByTagName('li');

// listItems[0].textContent = 'Cake test js';
// document.getElementById('favorite').style.color='red';


// var basket1 = [
//   {name: 'Milk',
//    price: 3},
//   {name: 'Water',
//    price: 1},
//   {name: 'Apple_Juice',
//    price: 4},
// {name: 'Soda',
//    price: 3},
// {name: 'Beer',
//    price: 6},
// {name: 'Pizza',
//    price: 10}];
//
// var test = document.createElement("p");
// test.textContent = "this is some content";
// document.body.appendChild(test);
//
//
//
// var sum = 0;
// var total1 = 0;
//
// for (i = 0; i < basket1.length; i++){
//
//   sum += basket1[i].price;
//   console.log(basket1[i].name + " $" + basket1[i].price);
//   total = (sum * .06);
//
//
// }

// console.log("_________________")
// console.log("Subtotal $" + sum);
// console.log("Tax $" + (sum * 0.06));
// console.log("Subtotal $" + (total + sum));

var basket2 = {name: "Pizza", price: 10};
var basket3 = {name: "Chips", price: 4};
var basket4 = {name: "Ice Cream", price: 5};
var basket5 = {name: "Guac", price: 7};
var basket6 = {name: "Salsa", price: 3.50};
var basket7 = {name: "OJ", price: 5};
var basket9 = {name: "Cheese", price: 5.50};
var basket10 = {name: "Bread", price: 2.50};
var basket11 = {name: "Water", price: 1.99};


var shoppingCart = [basket2, basket3, basket4, basket5, basket6, basket7];
document.body.style = "background-color: pink;"

shoppingCart.forEach(function(items) {
  console.log(items.name + ", $" + items.price.toFixed(2));
             total1 += items.price;

            var itemName = document.createElement("p");
            // itemName.textContent = items.name;
            // document.body.appendChild(itemName);
          //   itemName.className = "ItemName";
            // itemName.style = "background-color: grey; width: 300px;"

             var itemPrice = document.createElement("p");
            // itemPrice.textContent = "$" + items.price;
            // document.body.appendChild(itemPrice);

             var itemFull = document.createElement("p");
             itemFull.textContent= items.name + " $" + items.price;
             document.body.appendChild(itemFull);
             itemName.style = "background-color: grey; width: 300px;"

});

var receiptPaper = document.createElement("div");
receiptPaper.id = "receiptContainer";

document.body.appendChild(receiptPaper);

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
lineBreak.textContent = "_________________________" ;
document.body.appendChild(lineBreak);


var displayTotal = document.createElement("p");
displayTotal.textContent = "Total $" + Math.round((sum * 0.06) + sum);
document.body.appendChild(displayTotal);
displayTotal.className = "Total";
// displayTotal.style = "background-color: pink; width: 300px;"




console.log ("Your total is $" + total.toFixed(2));
