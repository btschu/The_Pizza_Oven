// 4 defined pizzas

function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "alfredo", "mozzarella", ["pepperoni", "sausage", "onions"]);
console.log(p3);

var p4 = pizzaOven("deep dish", "marinara", "mozzarella", ["canadian bacon", "pineapple"]);
console.log(p4);

// 1 random pizza

function randomPizza() {
    var crustType = ["deep dish", "hand tossed", "thin crust", "stuffed crust", "pretzel crust", "pan crust"];
    var sauceType = ["marinara", "traditional", "parmesan", "buffalo", "barbecue"];
    var cheeses = ["mozzarella", "feta", "cheddar", "parmesan", "asiago", "provolone"];
    var toppings = ["pepperoni", "bacon", "sausage", "mushrooms", "pineapple", "bell peppers", "onions", "olives"];
    crustType = crustType[Math.floor(Math.random() * crustType.length)];
    sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];
    var cheeseNum = Math.ceil(Math.random() * 3);
    var cheeseSelections = [];
    var i = 0;
    while(i < cheeseNum){
        var cheeseSelect = Math.floor(Math.random() * cheeses.length);
        if(!cheeseSelections.includes(cheeses[cheeseSelect])){
            cheeseSelections.push(cheeses[cheeseSelect]);
            i++;
        }
    }
    i = 0;
    var toppingNum = Math.ceil(Math.random()*5);
    var toppingSelections = [];
    while(i < toppingNum){
        var toppingSelect = Math.floor(Math.random() * cheeses.length);
        if(!toppingSelections.includes(toppings[toppingSelect])){
            toppingSelections.push(toppings[toppingSelect]);
            i++;
        }
    }
    return pizzaOven(crustType, sauceType, cheeseSelections, toppingSelections);
}
console.log(randomPizza());