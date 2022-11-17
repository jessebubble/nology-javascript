const ages = [22, 31, 44, 51, 66, 71, 88, 19];
const multiplyNumber = 2;


/* ## filter Challenge - Using filter, create a new array containing all the even numbers in an ages array */

/* showEvenAges = ages.filter(showEvenAges => 
    showEvenAges % 2 === 0);

console.log(showEvenAges); */

/* ### Extension - Refactor this into its own function that takes in an array of numbers as a parameter */

/* const showEvenAges = (ages) => {
    return ages.filter(showEvenAges =>
        showEvenAges % 2 === 0);
}
console.log(showEvenAges(ages)); */


/* ## forEach Challenge - Using forEach, for each age in an ages array, double the age and log a string using that doubled value */

/* showAgesDoubled = ages.forEach(showAgesDoubled => 
    console.log(showAgesDoubled * 2)); */


/* ### Extension - Refactor this into its own function that takes in an array of numbers as a parameter
                Add a second parameter (multiplyNumber), and multiply each number in the array by that parameter */

const showAgesDoubled = (ages, multiplyNumber) => {
    ages.forEach(showAgesDoubled =>
        console.log(showAgesDoubled * multiplyNumber));

}
showAgesDoubled(ages, multiplyNumber);

/* ## map Challenge - Using map, put the square root of each age in the ages array into a new array, log the new array */

/* showAgesSquared = ages.map(showAgesSquared =>
    console.log(showAgesSquared * showAgesSquared)); */


/* ### Extension - Refactor this into its own function that takes in an array of numbers as a parameter, and returns the new array */

/* const ShowAgesSquared = (ages) => {
    return ages.map(ShowAgesSquared =>
        ShowAgesSquared * ShowAgesSquared);
}
console.log(ShowAgesSquared(ages)); */