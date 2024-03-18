// function getSumOfEven(arr){
//     return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
//     }
//     console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]))
// 1. First, find the line that contains the problem. Write it down.
// return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];

// 2. Which debug method did you use to find the bug?
// console.log() and developer tools
// 3. Explain the bug in your own words.
// we don't have an element with index 10, only 9 elements

// 4. Fix the code and submit it all.
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    }
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]))

// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
