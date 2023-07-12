//References:
//1. https://www.w3schools.com/typescript/typescript_functions.php
//2. https://www.typescriptlang.org/docs/handbook/functions.html

function make_shirt(size = "Large", text: string = "I love TypeScript"): void {
    console.log("The size of the shirt is " + size + " with \"" + text + "\" written on it.");
}

make_shirt();
make_shirt("Medium");
make_shirt(undefined,"Super-Achiever");
make_shirt("XL","Super-Achiever");