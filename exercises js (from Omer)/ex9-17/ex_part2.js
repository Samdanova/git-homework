//ex #9
const countOfSiblings=()=>{
    let numSiblings=prompt('How many siblings do you have?');
if (numSiblings===1) console.log('1 sibling!')
else if (numSiblings>1) console.log('More than 1 sibling!')
else console.log('No siblings')
}

// ex #10
const calcPoints = (score)=>{
    let grade;
    switch (true) {
        case score >= 0 && score <= 64:
          grade = "F";
          break;
        case score >= 65 && score <= 69:
          grade = "D";
          break;
        case score >= 70 && score <= 79:
          grade = "C";
          break;
        case score >= 80 && score <= 89:
          grade = "B";
          break;
        case score >= 90 && score <= 100:
          grade = "A";
          break;
        default:
          grade = "Invalid score. Please enter a score between 0 and 100.";
      }
    
      return grade;
}

let studentScore = 85;
let grade = calcPoints(studentScore);
console.log(`The grade for the score ${studentScore} is: ${grade}`);

// ex 11
 const calculateAverage= (a,b,c)=>{
    let average=(a+b+c)/3;
    return average;
 }
 let team1=calculateAverage(89,120,103);
 let team2=calculateAverage(116,94,123);
 if (team1>team2) console.log(`Team#1 wins, their average score ${team1}`)
 else if (team1===team2)  console.log(`All of the teams have the same score`)
else console.log(`Team#2 wins, their average score ${team2}`)

//ex12
const printNumbers = (number)=>{
    for (let i=1; i<number; i++){
        if ((i%7===0)&& i.toString().includes(7)) console.log("BOOM-BOOM")
        else if ((i%7===0)&& !i.toString().includes(7)) console.log("BOOM")
       else console.log(i);
    }
}
printNumbers(20)

//ex 13
const isLeapYear =(year)=>{
    if ((year % 4 === 0 && year % 100!==0)||(year % 400 === 0)){
        console.log(`${year} is indeed a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}
isLeapYear(2012); 
isLeapYear(2100);  
isLeapYear(2400);

//ex 14
 const countryToLiveIn = (language, isIsland, population, country)=>{

 }