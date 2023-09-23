
/* Setting variable for ground state of calculator */
let currentState = 1;







/* Element selectors */

const displayBox = document.querySelector(".displaybox");
const allClearButton = document.querySelector("#allClearButton");
const clearButton = document.querySelector("#clearButton");
const floorDivisionButton = document.querySelector("#floorDivisionButton");
const regularDivisionButton = document.querySelector("#regularDivisionButton");
const numberSevenButton = document.querySelector("#numberSevenButton");
const numberEightButton = document.querySelector("#numberEightButton");
const numberNineButton = document.querySelector("#numberNineButton");
const additionButton = document.querySelector("#additionButton");
const numberFourButton = document.querySelector("#numberFourButton");
const numberFiveButton = document.querySelector("#numberFiveButton");
const numberSixButton = document.querySelector("#numberSixButton");
const subtractionButton = document.querySelector("#subtractionButton");
const numberOneButton = document.querySelector("#numberOneButton");
const numberTwoButton = document.querySelector("#numberTwoButton");
const numberThreeButton = document.querySelector("#numberThreeButton");
const multiplicationButton = document.querySelector("#multiplicationButton");
const numberZeroButton = document.querySelector("#numberZeroButton");
const decimalButton = document.querySelector("#decimalButton");
const equalsButton = document.querySelector("#equalsButton");


/* Event listeners for the buttons */

allClearButton.addEventListener("click", ACbuttonfunction);
clearButton.addEventListener("click", clearButtonfunction);
floorDivisionButton.addEventListener("click", floorDivisionButtonfunction);
regularDivisionButton.addEventListener("click", regularDivisionButtonfunction);
numberSevenButton.addEventListener("click", numberSevenButtonfunction);
numberEightButton.addEventListener("click", numberEightButtonfunction);




/* Limit on display and result output divs */
    
function inputLimitCheck () {

    let userInputTotalText = document.getElementById("userInput").textContent;

    if(userInputTotalText.length >= 18) {
        alert("You're kidding, right? Try something smaller.");
        ACbuttonfunction();
        
    };

};


/* Button functions */


function ACbuttonfunction () {

    document.getElementById("userInput").textContent = "0";
    document.getElementById("resultOutput").textContent = "";
    currentState = 0;
    

};


function clearButtonfunction () {

   let text = document.getElementById("userInput").textContent;
    if(text.length == 1) {
        currentState = 0;
        document.getElementById("userInput").textContent = "0";
    }else{
        let newText = text.substring(0, text.length-1);
        document.getElementById("userInput").textContent = newText;
    };

};


function floorDivisionButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        alert("Input a number first!");

    }else{
        let text = document.createTextNode("%");
        inputBox.appendChild(text);
    };

};


function regularDivisionButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        alert("Input a number first!");

    }else{
        let text = document.createTextNode("÷");
        inputBox.appendChild(text);
    };

};


function numberSevenButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "7";
        currentState = 1;

    }else{
        let text = document.createTextNode("7");
        inputBox.appendChild(text);
    };

};

function numberEightButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "8";
        currentState = 1;

    }else{
        let text = document.createTextNode("8");
        inputBox.appendChild(text);
    };

};






function buttonInputFunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    



};