//Reference: 
//1. https://blog.logrocket.com/dynamically-assign-properties-object-typescript/
//2. https://www.spguides.com/typescript-add-a-property-to-object/
//3. https://askjavascript.com/how-to-dynamically-assign-properties-to-an-object-in-typescript/
//4. https://bobbyhadz.com/blog/typescript-function-with-variable-number-of-arguments#:~:text=Use%20rest%20parameters%20to%20declare,use%20the%20...%20syntax.

/*
Question (Cars:)

Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/

interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function carInfo(manufacturer: string, model: string, options?: {[key: string]: any}): CarInfo {
    
    let carObj: CarInfo = {manufacturer, model};

    if (options){
        for (let key in options) {
            carObj[key] = options[key];
        }
    }

    return carObj;
}

let car1 = carInfo("Toyota", "Prius", {color: "White", transmission_System: "Auto", year: 2023});
console.log(car1);

let car2 = carInfo("Suzuki", "Alto");
console.log(car2);

let car3 = carInfo("Honda", "Accord", {year: 2020});
console.log(car3);