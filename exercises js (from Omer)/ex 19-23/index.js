// EX19
const people = ["Greg", "Mary", "Devon", "James"];
const people2=[...people];
//1
for (let i=0; i<people.length; i++){
    console.log(people[i])
}
//2
people.shift();
//3
people.pop();
//4
people.unshift("Matt");
//5
people.push("Lena");
//6
for (let i=0; i<people.length; i++){
    console.log(people[i])
    if (people[i]==="Mary") break;
}
//7 
// Find the indices of "Mary" and "Matt"
const maryIndex = people.indexOf("Mary"); //8
const mattIndex = people.indexOf("Matt");
const newArray = people.slice(0, mattIndex).concat(people.slice(mattIndex + 1, maryIndex)).concat(people.slice(maryIndex + 1));
console.log(newArray);
//9
console.log(people.indexOf("Foo")); 

//10
people2.splice(2,1,"Elizabeth", "Artie");
console.log(people2);

//11
const withBob=people2.concat("Bob");
console.log(withBob)


//EX 20
    const calculateLength=(array)=>{
        let newArray=[];
        for (let i=0; i<array.length; i++){
            newArray.push(array[i].length)
        } 
        console.log("EX 20: "+ newArray)
    }
    calculateLength(["boo", "doooo", "hoo","ro"])

//EX 21
const population=[1444216107, 1380004385, 331002651, 273523615];
const populationPercentages=(array)=>{
    let percentages=[];
    const overall = 7900000000;
    for (let i=0; i<array.length; i++){
        let result = (array[i] / overall * 100).toFixed(2);
        percentages.push(result+"%");
    } 
  console.log("EX 21: "+ percentages);
}
populationPercentages(population);

// EX 23

const reduceDuplicate=(array)=>{
    const newArray=[];
    for (let i=0; i<array.length; i++){
        let firstIndex=array.indexOf(array[i]);
        if (firstIndex === i) 
        newArray.push(array[i]);
    } 
    console.log("EX 23: " + newArray)
}
reduceDuplicate([3,4,4,3,6,3]);