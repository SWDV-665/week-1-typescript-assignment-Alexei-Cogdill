// Grocery Class
// Add Attributes
// Grocery Item Array
//Return via html
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var milk = new Grocery("Milk", 1, 3.87);
var salad = new Grocery("Salad", 2, 4.99);
var cheese = new Grocery("Cheese", 3, 3.99);
var groceryList = [
    displayList(milk),
    displayList(salad),
    displayList(cheese)
];
function displayList(buy) {
    return "You purchased " + buy.quantity + " " + buy.name + " for $" + buy.price + "\n";
}
var table = document.getElementById('cart').getElementsByTagName('tbody')[0];
for (var i = 0; i < groceryList.length; i++) {
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(groceryList[i]);
    newCell.appendChild(newText);
}
