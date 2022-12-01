/**
 * This program reads a file of ints representing calories being carried by separate individuals. The amount carried per person is separated by a blank line, each entry is on its own line. This program returns the total amount of calories being carried by the person carrying the most calories.
 * 
 * @param {string} - fileName - The name of the file containing the data to read.
 * 
 * @return {int} - The total amount of the person carrying the most calories.
 */

const fs = require("fs");

function mostCalories(file) {
    let dataString = fs.readFileSync(file).toString();
    let dataArr = dataString.split("\n\n");
    let sums = [];
    for (let entry of dataArr) {
        //console.log(entry);
        let str = entry.split("\n");
        sums.push(str.map(num => parseInt(num)).reduce((curr, total) => curr + total, 0));
    }

    let max = sums[0];
    sums.sort().reverse();
    console.log(sums);
    for (let num of sums) {
        //console.log(num);
        max = (num > max) ? num : max;
    }
    console.log(max);
    return sums[1] + sums[2] + sums[3];

}

console.log(mostCalories("01Calories.txt"));