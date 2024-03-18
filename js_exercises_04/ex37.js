
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
document.querySelector(".start-here").innerHTML="main title";
let ulElement=document.querySelector(".ul");
let newElement=document.createElement("li");
newElement.textContent = 'subtitle 4';
ulElement.append(newElement);

let lastLiElement = ulElement.lastElementChild;
lastLiElement.remove();
document.title = "Master Of The Dom";
document.querySelector("p").innerHTML="Hello Frontend";
