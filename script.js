let display = document.getElementById("display");
/* Sound Effect */
const sound = new Audio(
"https://www.soundjay.com/buttons/sounds/button-16.mp3"
);
/* Add Values */
function appendValue(value){
    display.value += value;
    sound.play();
}
/* Clear */
function clearDisplay(){
    display.value = "";
    sound.play();
}
/* Delete */
function deleteLast(){
    display.value = display.value.slice(0,-1);
    sound.play();
}
/* Calculate */
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
    sound.play();
}
/* Scientific Functions */
function squareRoot(){
    display.value = Math.sqrt(display.value);
    sound.play();
}
function square(){
    display.value = display.value * display.value;
    sound.play();
}
/* Dark Light Mode */
function toggleTheme(){
    document.body.classList.toggle("light");
}
/* Keyboard Support */
document.addEventListener("keydown",(e)=>{
    if(
        (e.key >= 0 && e.key <= 9) ||
        ['+','-','*','/','.'].includes(e.key)
    ){
        appendValue(e.key);
    }
    else if(e.key === "Enter"){
        calculate();
    }
    else if(e.key === "Backspace"){
        deleteLast();
    }
    else if(e.key === "Escape"){
        clearDisplay();
    }
});
