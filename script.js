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

}


console.log(add(1, 1));
console.log(subtract(1, 1));
console.log(multiply(2, 2));
console.log(divide(4, 2));