const button=document.querySelector(".button");

function submittForm(){
const colorInput = document.querySelector('.input').value.trim();
console.log(colorInput);
if (isValidHexColor(colorInput)) {
    console.log("changed");
    document.body.style.background = colorInput;
} else {
    alert('Invalid color code! Please enter a valid hex color code.');
}
}

function isValidHexColor(color) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    return regex.test(color);
    
}
button.addEventListener("click",submittForm);