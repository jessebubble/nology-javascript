/*
Create a function that will loop through the supermarketItems
object and attempt to buy them. Keep track of our bought items.
If we don’t have enough money for an item, we will print “too expensive”.

use a for...in loop, object(key) and array(index) to loop through the object

A for...in loop only iterates over enumerable, non-symbol properties. 
Objects created from built–in constructors like Array and Object have inherited non–enumerable properties
*/

const supermarketItems = {
    shampoo: 3.99,
    toothbrush: 2.99,
    "Toilet Paper": 8.99,
    "Beer": 10.99,
    Cereal: 2.99,
    Soap: 3.99,
    Book: 6.99,
    Paper: 5.99,
    Wine: 14.99,
};

const shoppingCart = (budget) => {
    boughtItems = [];
    for (const items in supermarketItems) {
        const itemsPrice = supermarketItems[items];
        if (budget >= itemsPrice) {
            boughtItems.push(items);
            budget -= itemsPrice;
        } else {
            console.log(`too expensive: ${items} put shoppingCart over budget`);
        }
    }
    return boughtItems;
};
console.log(`boughtItems: ${shoppingCart(20)}`);
    

/* const supermarketBudget = 38.00;
const boughtItems = [supermarketItems["Beer"], supermarketItems.Wine, supermarketItems["Toilet Paper"], supermarketItems.Cereal];

const budgetTracker = (supermarketBudget, boughtItems) => {
    let total = 0;
    for (let i = 0; i < boughtItems.length; i++) {
        total += boughtItems[i];
        console.log(total);
    }
    if (total > supermarketBudget) {
        console.log("Too expensive");
    } else {
        console.log("You have enough money");
    }
}
budgetTracker(supermarketBudget, boughtItems); */
    


/* const companies = [
    { name: "Money 4 U", industry: "Finance", start: 1981, end: 2003 },
    { name: "The Clothes Bay", industry: "Retail", start: 1992, end: 2008 },
    { name: "Luxurious Limousines", industry: "Auto", start: 1999, end: 2007 },
    { name: "Sunglasses House", industry: "Retail", start: 1989, end: 2010 },
    { name: "Vantage Solutions", industry: "Technology", start: 1989, end: 2014 },
];

companies.forEach((company) => {
    console.log(`${company.name} is in the ${company.industry} industry.`);
}); */

/* const myHouse = {
    bedrooms:
        [
            { name: "Front Hall", hasFirePlace: false },
            { name: "Kitchen", hasFirePlace: true },
            { name: "Best Bedroom", hasFirePlace: true },
            { name: "Pantry", hasFirePlace: false },
        ],
    address:
        {
            houseName: "Bag End",
            street: "Bagshot Row",
            town: "Hobbiton",
            region: "The Shire",
        },
}; */