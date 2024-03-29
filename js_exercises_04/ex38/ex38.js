// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
// Your markup should look like this:

const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
let olElement=document.createElement("ol")
users.forEach((element)=>{
const li=document.createElement("li");
li.textContent=element.firstName+" "+element.lastName;
li.setAttribute('data-id', element.id);
olElement.append(li);
}
)
document.querySelector('body').append(olElement);
olElement.style.listStyleType = 'none';

