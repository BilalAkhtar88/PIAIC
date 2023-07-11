let places2Visit = ["Singapore", "Medina", "Istanbul", "Mecca", "Maldives", "Sydney", "Stockholm"];
console.log("Original order of Array: \n", places2Visit);

//Reference of sorting array without modifying it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log("\nArray in alphabetical order: \n", [...places2Visit].sort());

console.log("\nOriginal Array after displaying it in alphabetical order: \n", places2Visit);

console.log("\nArray in reverse alphabetical order: \n", [...places2Visit].sort().reverse());

console.log("\nOriginal Array after displaying it in reverse alphabetical order: \n", places2Visit);

places2Visit = places2Visit.reverse();
console.log("\nOriginal Array after reversing its order: \n", places2Visit);

places2Visit = places2Visit.reverse();
console.log("\nThe array back to its original order: \n", places2Visit);

places2Visit = places2Visit.sort();
console.log("\nSorted Original Array with its order changed: \n", places2Visit);

places2Visit = places2Visit.reverse();
console.log("\nReverse sorted Original Array with its order changed: \n", places2Visit);
