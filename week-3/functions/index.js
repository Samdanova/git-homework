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

const calculator={
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
return a-b
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//ex5

function increaseByNameLength(money,name){
    return money*name.length
}
function makeRegal(name){
    let nameNew="His Royal Highness, ";
    return nameNew+name
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 