function shoes(name, productCode, quantity, valuePerItem){
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
    
}

// Creating instances of the shoes object
const shoe1 = new shoes("Sneakers", "SN123", 10, 50);
const shoe2 = new shoes("Boots", "BT456", 8, 70);
const shoe3 = new shoes("Sandals", "SD789", 15, 30);
const shoe4 = new shoes("Flats", "FT012", 20, 40);
const shoe5 = new shoes("Heels", "HL345", 12, 60);

let shoesArray = [shoe1, shoe2, shoe3, shoe4, shoe5];

// function to find shoe
function findShoe(shoesArray, shoeName) {
    for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i].name === shoeName) {
            console.log("Shoes Found:");
            console.table([shoesArray[i]]);
            return;
        }
    }
    console.log("Shoes not found");
}
// function to get cheapest shoe
function findShoeWithLowestValue(shoesArray) {

    shoesArray.sort((firstShoe, secondShoe) => firstShoe.valuePerItem < secondShoe.valuePerItem ? -1 : 1);
    console.log("Cheapest Shoe is: ")
    console.table(shoesArray[0]);
    
}
// function to get most expensive shoe
function findShoeWithHighestValue(shoesArray) {

    shoesArray.sort((firstShoe, secondShoe) => firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1);
    console.log("Most Expensive Shoe is: ")
    console.table(shoesArray[0]);
    
}

// function to edit values of shoe objects
// pass the shoe instance you want to edit and the new values
function editPropertiesOfShoes(shoe, name, productCode, quantity, valuePerItem){
    shoe.name = name;
    shoe.productCode = productCode;
    shoe.quantity = quantity;
    shoe.valuePerItem = valuePerItem;
}

// function to sort in ascending order based on "value per item"
function sortShoeWithValuePerItem(shoesArray) {

    shoesArray.sort((firstShoe, secondShoe) => firstShoe.valuePerItem < secondShoe.valuePerItem ? -1 : 1);
    console.log("New array: ")
    console.table(shoesArray);
    
}
// calling every function

// findind "Heels"
findShoe(shoesArray, "Heels");

//finding cheapest shoe
findShoeWithLowestValue(shoesArray);

//finding expensive shoe
findShoeWithHighestValue(shoesArray);

//sorting shoes based on "value per item"
sortShoeWithValuePerItem(shoesArray);

// editing properties of shoe1
editPropertiesOfShoes(shoe1, "Joggers", "JG809", 7, 45);
console.table(shoe1);


