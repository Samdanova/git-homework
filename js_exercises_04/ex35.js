// function countOccurrences(str, char) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char) {
//             counter + 1;
//         }
//     }
//     return counter;
// }
// console.log(countOccurrences("ini mini miny moe", "n"));

// 1. First, find the line that contains the problem. Write it down. counter +1
// ;
// 2. Which debug method did you use to find the bug? console.log and developer
// tools tab console
// 3. Explain the bug in your own words. 
// In its current form, counter +1; does
// not actually change the value of counter. It performs an addition operation
// but doesn't assign the result back to counter. As a result, the counter
// variable remains unchanged and the function always returns 0.
// 4. Fix the code and submit it all.
function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter ++;
        }
    }
    return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));