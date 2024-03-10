//ex 1

function isEven (number){
if (number % 2 === 0) return true; else return false
}
console.log(isEven(4));

//ex2

function isEvenArray (array){
    let oddArray=[];
    for (let i=0; i<array.length; i++){
        if (array[i] % 2 !== 0) 
        oddArray.push(array[i]);   
    }
    console.log(oddArray);
    }
    isEvenArray([4,5,8,7]);

//ex 3

function checkExists(array,number){
    for (let i=0; i<array.length; i++){
        if (array[i] === number) 
        return true 
    }
    return false
}
console.log(checkExists([4,5,9],9))

//ex4