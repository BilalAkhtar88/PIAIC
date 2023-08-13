function add (num1:number, num2:number) {
    return num1 + num2;
}

function subtract(num1:number, num2:number){
    return num1 - num2;
}

function multiply(num1:number, num2:number){
    return num1 * num2;
}

function divide(num1:number, num2:number){
    return num1 / num2;
}

function remainder(num1:number, num2:number){
    return num1 % num2;
}

function exponentiation(num1:number, num2:number){
    return num1 ** num2;
}

export default add;
export {subtract, multiply, divide, remainder, exponentiation};