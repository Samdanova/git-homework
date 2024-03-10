//ex 1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
function createObject(array1, array2){
    for(let i=0; i<array1.length; i++){
        people[i]={}; //initialize an object
        people[i].name=array1[i];
        people[i].age=array2[i];
    }
    console.log(people)
}
createObject(names,ages);

//ex2
function writeSentense(array){
    for(let i=0; i<array.length; i++){
       console.log(`${array[i].name} is ${array[i].age} years old`)
    }
}
writeSentense(people);

//ex3
const posts = [
    {
        id: 1,
        text: "Love this product"
    }, {
        id: 2,
        text: "This is the worst. DON'T BUY!"
    }, {
        id: 3,
        text: "So glad I found this. Bought four already!"
    }
]
function deleteNegative(posts) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id===2) {
            posts.splice(i, 1)
        }
    }
    console.log(posts)
}
deleteNegative(posts)

//ex4 

const poosts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  function deleteNegativeComment(posts) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id===2) {
            const commentIndex=posts[i].comments.findIndex(comment=>comment.id===3)
            posts[i].comments.splice(commentIndex, 1)
        }
    }
    console.log(posts)
}
deleteNegativeComment(poosts)