//ex1
const p1={
    name:"Sarah",
    age:26,
    city:"Bat Yam"
}

const p2={
    name:"David",
    age:30,
    city:"Tel Aviv"
}

function compare(object1, object2) {
    if (object1.age === object2.age) 
        console.log("the have the same age")
    else if (object1.age < object2.age) {
        console.log(`${object2.name} older ${object1.name}`)
    } else 
        console.log(`${object1.name} older ${object2.name}`)
        if (object1.city === object2.city) console.log(`${object1.name} wanted to date ${object2.name}`) 
        else  console.log(`${object1.name} wanted to date ${object2.name} but couldn’t`) 
}
compare(p1,p2)

//ex2

const library={
    books:[ { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    ]
}
