const buttonIncrease=document.querySelector(".increase");
const buttonDecrease=document.querySelector(".decrease");
const text=document.querySelector(".text");

let currentFontSize = parseInt(window.getComputedStyle(text).fontSize);

const increaseFont=()=>{
  if (currentFontSize < 100) { // Limiting font size to 100px
    currentFontSize += 2;}
    if (currentFontSize > 100) {
      currentFontSize = 100;
    }
  text.style.fontSize = currentFontSize + "px";
}
const decreaseFont=()=>{
  if (currentFontSize > 6) { // Limiting font size to 6px
    currentFontSize -= 2;
  }
    if (currentFontSize < 6) {
      currentFontSize = 6;
    }
  currentFontSize -=2; 
  text.style.fontSize = currentFontSize + "px";
}

buttonIncrease.addEventListener("click", increaseFont);
buttonDecrease.addEventListener("click", decreaseFont);