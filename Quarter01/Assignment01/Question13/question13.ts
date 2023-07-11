let favTransAnimals = ["horse","donkey","camel","buffalo"];

//Method 1:
console.log("I would like to own a " + favTransAnimals[0] + " for transportation, one day.");
console.log("I would like to own a " + favTransAnimals[1] + " for transportation, one day.");
console.log("I would like to own a " + favTransAnimals[2] + " for transportation, one day.");
console.log("I would like to own a " + favTransAnimals[3] + " for transportation, one day.");

//Following methods can also be used to iterate over each element of array in typescript: 

//Method 2:
//for (var animal of favTransAnimals) {
//    console.log("I would like to own a " + animal + " for transportation, one day." );
//}

//Method 3:
//for(let i=0; i<favTransAnimals.length; i++) {
//    console.log("I would like to own a " + favTransAnimals[i] + " for transportation, one day.");
//}

//Method 4:
//favTransAnimals.forEach(animal => {console.log(`I would like to own a ${animal} for transportation, one day.`)});
