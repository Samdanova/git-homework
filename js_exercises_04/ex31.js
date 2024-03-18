// function getSum(arr1, arr2){
//     const sum = 0;
//     for (let i=0; i < arr1.length; i++){
//     sum += arr1[i];
//     }
//     for (let i=0; i < arr2.length; i++){
//     sum += arr2[i];
//     }
//     }
//     getSum([1,2,3][5,66,23]);

    // 1. First, find the line that contains the problem. Write it down.
    // const sum = 0;
    // getSum([1,2,3][5,66,23]);
    
    // 2. Which debug method did you use to find the bug?
    // I saw the error in console at developer tools
    
    // 3. Explain the bug in your own words.
    // We can't change the variables when it was declarated with const. We should use let
    // also there was the error with sending arrays, we need to put comma between it
    // 4. Fix the code and submit it all.
    function getSum2(arr1, arr2){
        let sum = 0;
        for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
        }
        for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
        }
        console.log(sum)
        }
        getSum2([1,2,3],[5,66,23]);