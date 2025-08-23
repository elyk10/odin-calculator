let numX;
let numY;
let operator;

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

function operate(x, y, operation)
{
    let result = 0;
    
    switch(operation) {
        case "add":
            result = add(x, y);
            break;
        case "subtract":
            result = subtract(x, y);
            break;
        case "multiply":
            result = multiply(x, y);
            break;
        case "divide":
            result = divide(x, y);
            break;
    }
    return result;
}

document.addEventListener("DOMContentLoaded", () => {
    let btnPressed = document.querySelector(".btns");
    let display = document.querySelector(".display");

    btnPressed.addEventListener("click", (event) => {
        let target = event.target;
        
        switch(target.id) {
            case "b0":
                display.textContent += "0"; 
                break;
            case "b1":
                display.textContent += "1";
                break;
            case "b2":
                display.textContent += "2";
                break;
            case "b3":
                display.textContent += "3";
                break;
            case "b4":
                display.textContent += "4";
                break;
            case "b5":
                display.textContent += "5";
                break;
            case "b6":
                display.textContent += "6";
                break;
            case "b7":
                display.textContent += "7";
                break;
            case "b8":
                display.textContent += "8";
                break;
            case "b9":
                display.textContent += "9";
                break;
            case "bAdd":
                numX = parseInt(display.textContent);
                display.textContent = "";
                operator = "add";
                break;
            case "bSub":
                numX = parseInt(display.textContent);
                display.textContent = "";
                operator = "sub";
                break;
            case "bMul":
                numX = parseInt(display.textContent);
                display.textContent = "";
                operator = "multiply";
                break;
            case "bDiv":
                numX = parseInt(display.textContent);
                display.textContent = "";
                operator = "divide";
                break;
            case "bEqu":
                numY = parseInt(display.textContent);
                let result = operate(numX, numY, operator);
                display.textContent = result;
                break;
            case "bClr":
                display.textContent = "";
                break;
        }
    });
});


console.log(add(1, 1));
console.log(subtract(1, 1));
console.log(multiply(2, 2));
console.log(divide(4, 2));