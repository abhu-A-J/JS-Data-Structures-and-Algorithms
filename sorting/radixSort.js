/*Write a function to implement a radix sort algorithm*/ 
// Defining Helper Methods for radix sort

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitLength(num) {
    return String(Math.abs(num)).length + 0;
}

function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++){
        max = Math.max(max, digitLength(nums[i]));
    }
    return max;
}

// console.log(getDigit(-09798, 5));
// console.log(digitLength(-9273298));
// console.log(mostDigits([87,-987,8759]))