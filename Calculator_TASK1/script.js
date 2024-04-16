document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let expression = ''; // Variable to store expression

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "ENTER") {
                // Perform calculation
                try {
                    const result = eval(expression);
                    display.value += ` = ${result}`;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (button.textContent === "DEL") {
                // Delete last character from expression
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (button.textContent === "CLEAR") {
                // Clear display and expression
                expression = '';
                display.value = "";
            } else if (button.textContent === "+") {
                // Addition
                expression += "+";
                display.value += "+";
            } else if (button.textContent === "-") {
                // Subtraction
                expression += "-";
                display.value += "-";
            } else if (button.textContent === "*") {
                // Multiplication
                expression += "*";
                display.value += "*";
            } else if (button.textContent === "/") {
                // Division
                expression += "/";
                display.value += "/";
            } else if (button.textContent === "%") {
                // Modulus
                expression += "%";
                display.value += "%";
            } else if (button.textContent === "^") {
                // Power
                expression += "**";
                display.value += "^";
            } else {
                // Append button value to expression
                expression += button.textContent;
                display.value += button.textContent;
            }
        });
    });
});
