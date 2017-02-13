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
    },
    {
        name: 'More Pizza',
        price: 60
    }

];

displayTotal();
showCart();
updateTotal();

function updateTotal() {
    total = 0;

    for (i = 0; i < basket.length; i++) {

        total += basket[i].price;

    };
};


function displayTotal() {

    updateTotal();

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

// displayTotal();
// showCart();
// updateTotal();


function addItem() {


    var newItem = document.getElementById("newItem").value;
    var newPrice = Number(document.getElementById("newPrice").value);

    basket.push({
        name: newItem,
        price: newPrice
    });

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
