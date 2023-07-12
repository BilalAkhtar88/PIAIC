function sandwiches(itemsArray) {

    console.log("\nYou have ordered a sandwich with following ingredients:");

    for (let item of itemsArray) {
        console.log(item);
    }
}

sandwiches(["Cheese", "Lettuce", "Tomato", "Cucumber"]);
sandwiches(["Strawberry Jam","Butter"]);
sandwiches(["Omelette", "Sausage", "Ketchup"]);