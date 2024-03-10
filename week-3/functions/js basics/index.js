//ex 1

console.log((5 > 2) && false) //false
console.log(!("knife" === "sword")) //true
console.log(((1 < 2) || (-1 > -1) || !false)) //true
console.log(("")) //false
console.log((31 % 5) == "1") //true
console.log(!!true) //true
console.log("5th Avenue" != "5th Avenue") //false
console.log(52 !== "52") //true
console.log((undefined || null)) //false

//ex2

let a = 3
let c = 0
let b = a //3
b = a //3
c = a //3
b = c //3
a = b //3
console.log(a)

//ex Conditional
function sales(){
    let boughtTesla= prompt("Did you buy a Tesla previously?") === 'true';
let isUSCitizen=prompt("Are you US citizen?") === 'true';
if (boughtTesla && isUSCitizen) {
    let yearOfTeslaPurchase=prompt("how long ago you bought your Tesla");
    if (yearOfTeslaPurchase>4){
        let wish=prompt("Do you want an upgrade?")
        console.log(wish);
    } else {
        let wish=prompt("Do you sutisfied with your car?")
        console.log(wish);
    }
}
if (boughtTesla && !isUSCitizen) {
    let moving=prompt("Would you like to move to the US?");
    console.log(moving)
}
if (!boughtTesla) {
    let buy=prompt("Would you like to buy one?");
    console.log(buy)
}

}
sales()
