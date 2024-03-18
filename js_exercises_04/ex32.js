// function findSmallest(a, b, c){
//     if (a > b > c){
//     return c;
//     } else if (a > c > b) {
//     return a;
//     } else {
//     return b;
//     }
//     }
//     findSmalest(52,66, 2);
    
// 1. First, find the line that contains the problem. Write it down.
// findSmalest(52,66, 2);

// 2. Which debug method did you use to find the bug?
// Console at developer tools

// 3. Explain the bug in your own words.
// syntax bug. There was missed a letter l
// 4. Fix the code and submit it all.

function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
    } else {
    return b;
    }
    }
    console.log(findSmallest(52,66, 2));

