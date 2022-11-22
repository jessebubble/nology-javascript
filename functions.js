/* Functions Challenge
1. A Bit About Me
Write a function named getDescription that has 4 parameters:

Number of children, Partner's name, Geographic location, Job title

Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."

Call that function 3 times with 3 different values for the arguments. */

let numberOfChildren = [2, 3, 4];
let partnersName = ["Baby Queen", "Tove Lo", "Little Boots"];
let geographicLocation = ["London", "Australia", "Sweden"];
let jobTitle = ["musician", "singer", "songwriter"];

const getDescription = (numberOfChildren, partnersName, geographicLocation, jobTitle) => {
  console.log(`I am currently a ${jobTitle[2]} living in ${geographicLocation[1]}, and married to ${partnersName[2]} with ${numberOfChildren[0]} kids.`);
}
getDescription(numberOfChildren, partnersName, geographicLocation, jobTitle);

/*  2. Lifetime Supply of Snickers
Write a function named calculateSupply that has 2 parameters: 
Age, Amount per day

Calculates the amount consumed for rest of your life (based on a separate max age constant).

Output your statement to the console like so: "You will need X snickers to last you until the ripe old age of Y"

Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. 
Math.round() */

let age = [10, 20, 30];
let amountPerDay = [1.5, 2.5, 3.5];
const maxAge = 70;

const calculateSupply = (age, amountPerDay) => {
  console.log(`You will need ${(Math.round(amountPerDay[0] * 365))} snickers to last you until the ripe old age of ${(maxAge - age[1])}.`);
}
calculateSupply(age, amountPerDay);

/* Functions Challenge
1. Calculate Area
Write a function to find the area of a circle. When given a radius, print the area to the console. 
Area = PI * radius2          */

const calculateArea = (radius) => {
  //write the rest of the code here
    return Math.PI * (radius * radius);
};
console.log(Math.PI);
console.log(calculateArea(1));

/* 2. Calculate Circumference
Write a function to find the circumference of a circle. When given a radius, print the circumference to the console.
Circumfrence = 2PI * radius         */

const calculateCircumference = (radius) => {
  //write the rest of the code here
    return (2 * Math.PI) * radius;
};
console.log(calculateCircumference(1));

/* Functions Challenge
1. Celsius to Fahrenheit
Convert a celsius temperature to fahrenheit and print a string to console like so: "X°C is Y°F". 

To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.            */

let celsiusTemperatures = [5, 10, 20, 25];
const celsiusToFahrenheit = (celsiusTemperatures[0] * 1.8) + 32; 

console.log(`${celsiusTemperatures[0]}°C is ${celsiusToFahrenheit}°F`);

/* 2. Fahrenheit to Celsius
Convert a fahrenheit temperature to celsius and print a string to console like so: "X°F is Y°C".

To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).     */

let fahrenheitTemperatures = [50, 60, 70, 80];
const fahrenheitToCelsius = (fahrenheitTemperatures[0] - 32) * 0.5556;

console.log(`${fahrenheitTemperatures[0]}°F is ${fahrenheitToCelsius}°C`);