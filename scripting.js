
/* Setting variable for ground state of calculator */
let currentState = 1;







/* Element selectors */

const displayBox = document.querySelector(".displaybox");
const allClearButton = document.querySelector("#allClearButton");
const clearButton = document.querySelector("#clearButton");
const floorDivisionButton = document.querySelector("#floorDivisionButton");
const regularDivisionButton = document.querySelector("#regularDivisonButton");
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




/* Limit on display and result output divs */

let userInputTotalText = document.getElementById("userinput").textContent;
console.log(userInputTotalText);

if(userInputTotalText.length > 18) {
    alert("You're kidding, right? Try something smaller.");
    ACbuttonfunction();
};











function ACbuttonfunction () {

    document.getElementById("userInput").textContent = "0";
    document.getElementById("resultOutput").textContent = "";


};


function clearButtonfunction () {

   let text = document.getElementById("userInput").textContent;
   let newText = text.substring(0, text.length-1);
   document.getElementById("userInput").textContent = newText;

};


function floorDivisionButtonfunction () {

    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        let text = "%";
        inputBox.textContent = text;
    }else{
        let text = document.createTextNode("%");
        inputBox.appendChild(text);
    };

};