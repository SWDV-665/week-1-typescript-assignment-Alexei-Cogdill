// Grocery Class
// Add Attributes
// Grocery Item Array
//Return via html

class Grocery {
    name: string;
    quantity: number;
    price: number;
    
    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

interface Item {
    name: string;
    quantity: number;
    price: number;
}


let milk = new Grocery ("Milk", 1, 3.87);
let salad = new Grocery ("Salad", 2, 4.99);
let cheese = new Grocery ("Cheese", 3, 3.99);

let groceryList = [
    displayList(milk),
    displayList(salad),
    displayList(cheese)
];

function displayList(buy: Item) {
    return "You purchased " + buy.quantity + " " + buy.name + " for $" + buy.price + "\n";
}

var table = document.getElementById('cart').getElementsByTagName('tbody')[0];

for (var i = 0; i < groceryList.length; i++) {

    var newRow = table.insertRow();

    var newCell = newRow.insertCell();

    var newText = document.createTextNode(groceryList[i]);

    newCell.appendChild(newText);
}