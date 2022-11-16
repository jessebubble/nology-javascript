/*
create a script that will use a loop to iterate through an array of scores(numbers)
log to the console "12 is a big score" if the score is greater than 10

EXTENSION 
use a function that takes two parameters, an array of scores(numbers) and a big score threshold
we should be able to change the score threshold to change what a big score is
*/

let scores = [50, 7, 60, 160, 8, 190, 10, 120, 14];
let bigScoreThreshold = 100;

const newBigScoreThreshold = (scores, bigScoreThreshold) => {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > bigScoreThreshold) {
            console.log(`${scores[i]} is a big score`);
        }
    }
}
newBigScoreThreshold(scores, bigScoreThreshold);