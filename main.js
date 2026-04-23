
console.log("Hii!");
let errorCatch = false; //This will be triggered when an error is caught
let lastOperator = {
    state: false,
    operator: ""
}; //This determines whether last typed input was an operator and also stores the operator
let clearState = true; //This triggers when the calculator is cleared


function appendOutput(input) {
    console.log("Error=" + errorCatch + ", Operator=" + lastOperator.state + ", Clear=" + clearState);
    let output = document.getElementById("output").textContent;
    if (clearState== true || errorCatch == true) {
        if (["+", "-", "*", "/"].includes(input)) return;

        document.getElementById("output").textContent = input;
        errorCatch = false;

    } else {
        if (["+", "-", "*", "/"].includes(input)) {
            if (lastOperator.state == false && clearState == false) {
                document.getElementById("output").textContent = output.concat(" ", input);
                lastOperator.state = true;
                lastOperator.operator = input;
                console.log("Last input was operator");
            }

        } else {
            if (lastOperator.state == false) {
                document.getElementById("output").textContent = output.concat("", input);
            } else {
                document.getElementById("output").textContent = output.concat(" ", input);
                lastOperator.state = false;
            }
        }
    }
    clearState = false;
}
function calculate() {
    try {
        if (lastOperator.state == true) { return } else {
            let expression = document.getElementById("output").textContent;
            let answer = eval(expression);
            document.getElementById("output").textContent = answer;
        }
    } catch (error) {
        document.getElementById("output").textContent = "Error!!!";
        errorCatch = true;
    }
}

function clearButton() {
    document.getElementById("output").textContent = "0";
    console.log("cleared");
    lastOperator.state = false;
    lastOperator.operator = "";
    errorCatch = false;
    clearState = true;
}
function swap() {

    /* Currently evaluates the current expression before
    applying the negative, because I can't figure out how to
    detect if the expression has an operator even if it was not
    the last input */

    if (lastOperator.state == true) return;
    document.getElementById("output").textContent = eval(document.getElementById("output").textContent);
    document.getElementById("output").textContent = eval(document.getElementById("output").textContent * -1);
}