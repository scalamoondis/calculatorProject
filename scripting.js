
/* Setting variable for ground state of calculator, starts in an active state because there are numbers in it */
let currentState = 1;


/* Setting initial value for calculations */
let calculation = 0;




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
numberNineButton.addEventListener("click", numberNineButtonfunction);
additionButton.addEventListener("click", additionButtonfunction);
numberFourButton.addEventListener("click", numberFourButtonfunction);
numberFiveButton.addEventListener("click", numberFiveButtonfunction);
numberSixButton.addEventListener("click", numberSixButtonfunction);
subtractionButton.addEventListener("click", subtractionButtonfunction);
numberOneButton.addEventListener("click", numberOneButtonfunction);
numberTwoButton.addEventListener("click", numberTwoButtonfunction);
numberThreeButton.addEventListener("click", numberThreeButtonfunction);
multiplicationButton.addEventListener("click", multiplicationButtonfunction);
numberZeroButton.addEventListener("click", numberZeroButtonfunction);





/* Limit on display and result output divs */
    
function inputLimitCheck () {

    let userInputTotalText = document.getElementById("userInput").textContent;

    if(userInputTotalText.length >= 18) {
        alert("You're kidding, right? Try something smaller.");
        ACbuttonfunction();
        
    };

};


/* All button display functions */

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



function numberNineButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "9";
        currentState = 1;

    }else{
        let text = document.createTextNode("9");
        inputBox.appendChild(text);
    };

};


function additionButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        alert("Input a number first!");

    }else{
        let text = document.createTextNode("+");
        inputBox.appendChild(text);

    };

};


function numberFourButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "4";
        currentState = 1;

    }else{
        let text = document.createTextNode("4");
        inputBox.appendChild(text);
    };

};


function numberFiveButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "5";
        currentState = 1;

    }else{
        let text = document.createTextNode("5");
        inputBox.appendChild(text);
    };

};


function numberSixButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "6";
        currentState = 1;

    }else{
        let text = document.createTextNode("6");
        inputBox.appendChild(text);
    };

};


function subtractionButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        alert("Input a number first!");

    }else{
        let text = document.createTextNode("-");
        inputBox.appendChild(text);

    };

};


function numberOneButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "1";
        currentState = 1;

    }else{
        let text = document.createTextNode("1");
        inputBox.appendChild(text);
    };

};


function numberTwoButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "2";
        currentState = 1;

    }else{
        let text = document.createTextNode("2");
        inputBox.appendChild(text);
    };

};


function numberThreeButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "3";
        currentState = 1;

    }else{
        let text = document.createTextNode("3");
        inputBox.appendChild(text);
    };

};


function multiplicationButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        alert("Input a number first!");

    }else{
        let text = document.createTextNode("*");
        inputBox.appendChild(text);

    };

};


function numberZeroButtonfunction () {

    inputLimitCheck();
    let inputBox = document.getElementById("userInput");
    if(currentState == 0) {
        document.getElementById("userInput").textContent = "0";
        currentState = 1;

    }else{
        let text = document.createTextNode("0");
        inputBox.appendChild(text);
    };

};


/* This is where the "=" and decimal functions will go */


function equalsButtonfunction () {

};


function decimalButtonfunction () {

};





/* Operation functions */

function additionOperationfunction (firstNumber, secondNumber) {

    return firstNumber+secondNumber;

};


function subtractionOperationfunction (firstNumber, secondNumber) {

    return firstNumber-secondNumber;

};


function multiplicationOperationfunction (firstNumber, secondNumber) {

    return firstNumber*secondNumber;

};


function divisionOperationfunction (firstNumber, secondNumber) {

    return firstNumber/secondNumber;

};

function floorDivisionOperationfunction (firstNumber, secondNumber) {

    return firstNumber%secondNumber;

};


/* Calculation functions */


function calculationFunction () {

    let mathProblem = document.getElementById("userInput").textContent;
    let operators = ["%", "*", "+", "-", "÷"];
    let includedOperators = [];
    let seperatedProblem = [];


    for(let i = 0;i < operators.length; i++) {
        if(mathProblem.includes(operators[i]) == true) {
            includedOperators.push(operators[i]);
        }else{
            continue;
        };
    };

    let accountedSigns = includedOperators.length;
    let accountedNumbers = includedOperators.length+1;
    let signCount = 0;

    for(let i = 0, j = 0, n = 0;n < accountedNumbers; j++) {
        if(includedOperators.includes(mathProblem[j]) == true) {
            let number = mathProblem.substring(i,j);
            let sign = mathProblem[j];
            seperatedProblem.push(number);
            seperatedProblem.push(sign);
            signCount += 1;
            i = j+1;
            n++;
        };

        if(signCount == accountedSigns) {
            let number = mathProblem.substring(i);
            seperatedProblem.push(number);
            n++;
        };

    };


    let total = 0;
    for(let i = 0;i < seperatedProblem.length; i++) {
        if(seperatedProblem[i] == '+') {
            total = additionOperationfunction(total, seperatedProblem[i+1]);
            i++;
        }else if(seperatedProblem[i] == '-') {
            total = subtractionOperationfunction(total, seperatedProblem[i+1]);
            i++;
        }else if(seperatedProblem[i] == '*') {
            total = multiplicationOperationfunction(total, seperatedProblem[i+1]);
            i++;
        }else if(seperatedProblem[i] == '÷') {
            total = divisionOperationfunction(total, seperatedProblem[i+1]);
            i++;
        }else if(seperatedProblem[i] == '%') {
           total = floorDivisionOperationfunction(total, seperatedProblem[i+1]);
           i++;
        }else {
            total += seperatedProblem[i];
        };
        
    };


};