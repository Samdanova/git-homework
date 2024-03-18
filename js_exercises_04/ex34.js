// function calcAverage (arr){
//     var sum ;
//     for ( var i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//     } return sum ;
//     }
//     console.log(calcAverage ([ 85 , 90 , 92 ]));

// 1. First find the line that contains the problem. Write it down.
var sum;
// 2. Which debug method did you use to find the bug?
// console.log() and developer tools
// 3. Explain the bug in your own words.
// When sum is declared without an initial value, it defaults to undefined. Then, when you try to add a number to undefined, JavaScript will implicitly convert undefined to NaN (Not a Number). 
// 4. Fix the code and submit it all.

function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum ;
    }
    console.log(calcAverage ([ 85 , 90 , 92 ]));