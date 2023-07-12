//Reference: 
//1. https://blog.logrocket.com/dynamically-assign-properties-object-typescript/
//2. https://www.spguides.com/typescript-add-a-property-to-object/
//3. https://askjavascript.com/how-to-dynamically-assign-properties-to-an-object-in-typescript/
//4. https://bobbyhadz.com/blog/typescript-function-with-variable-number-of-arguments#:~:text=Use%20rest%20parameters%20to%20declare,use%20the%20...%20syntax.
function carInfo(manufacturer, model, options) {
    var carObj = { manufacturer: manufacturer, model: model };
    if (options) {
        for (var key in options) {
            carObj[key] = options[key];
        }
    }
    return carObj;
}
var car1 = carInfo("Toyota", "Prius", { color: "White", transmission_System: "Auto", year: 2023 });
console.log(car1);
var car2 = carInfo("Suzuki", "Alto");
console.log(car2);
var car3 = carInfo("Honda", "Accord", { year: 2020 });
console.log(car3);
