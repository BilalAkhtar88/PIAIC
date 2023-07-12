function sandwiches(itemsArray) {
    console.log("\nYou have ordered a sandwich with following ingredients:");
    for (var _i = 0, itemsArray_1 = itemsArray; _i < itemsArray_1.length; _i++) {
        var item = itemsArray_1[_i];
        console.log(item);
    }
}
sandwiches(["Cheese", "Lettuce", "Tomato", "Cucumber"]);
sandwiches(["Strawberry Jam", "Butter"]);
sandwiches(["Omelette", "Sausage", "Ketchup"]);
