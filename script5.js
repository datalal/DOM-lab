var total;
  var newTotal;
  var totalPrice = document.createElement("p");

var basket = [{
        name: 'Milk',
        price: 3
    },
    {
        name: 'Water',
        price: 1
    },
    {
        name: 'Apple Juice',
        price: 4
    },
    {
        name: 'Soda',
        price: 3
    },
    {
        name: 'Beer',
        price: 6
    },
    {
        name: 'Pizza',
        price: 20
    }
];

function updateTotal(){
total = 0;

  for (i = 0; i < basket.length; i++) {

      total += basket[i].price;

  };
//   return total;
// console.log(total);
//   totalPrice.textContent = total;
};


function displayTotal() {

  //
  // for (i = 0; i < basket.length; i++) {
  //
  //     total += basket[i].price;
  //
  // };

  newTotal = updateTotal();

    totalPrice = document.createElement("p");
    totalPrice.textContent = "Total: $" + total;
    cartContainer.appendChild(totalPrice);
    totalPrice.className = "totalPrice";
    console.log(total);


};


function showCart() {


    for (i = 0; i < basket.length; i++) {


        var itemSlot = document.createElement("p");
        itemSlot.textContent = basket[i].name + " $" + basket[i].price;
        cartContainer.appendChild(itemSlot);
        itemSlot.className = "itemSlot";

    };


};

// updateTotal();

displayTotal();
showCart();
updateTotal();


function addItem() {


    var newItem = document.getElementById("newItem").value;
    var newPrice = Number(document.getElementById("newPrice").value);

    // var newObj = {
    // name: newItem,
    // price: newPrice};

    basket.push({
        name: newItem,
        price: newPrice
    });

    // basket1.push(newObj);

    var itemSlot = document.createElement("p");
    itemSlot.textContent = newItem + " $" + newPrice;
    cartContainer.appendChild(itemSlot);
    itemSlot.className = "itemSlot";

    total += newPrice;
    console.log(total);
    // totalPrice.textContent = "TOTAL: $" + total;
    totalPrice.textContent = "Total $" + total;

    updateTotal();

};
