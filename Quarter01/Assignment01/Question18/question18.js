var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places2Visit = ["Singapore", "Medina", "Istanbul", "Mecca", "Maldives", "Sydney", "Stockholm"];
console.log("Original order of Array: \n", places2Visit);
//Reference of sorting array without modifying it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log("\nArray in alphabetical order: \n", __spreadArray([], places2Visit, true).sort());
console.log("\nOriginal Array after displaying it in alphabetical order: \n", places2Visit);
console.log("\nArray in reverse alphabetical order: \n", __spreadArray([], places2Visit, true).sort().reverse());
console.log("\nOriginal Array after displaying it in reverse alphabetical order: \n", places2Visit);
places2Visit = places2Visit.reverse();
console.log("\nOriginal Array after reversing its order: \n", places2Visit);
places2Visit = places2Visit.reverse();
console.log("\nThe array back to its original order: \n", places2Visit);
places2Visit = places2Visit.sort();
console.log("\nSorted Original Array with its order changed: \n", places2Visit);
places2Visit = places2Visit.reverse();
console.log("\nReverse sorted Original Array with its order changed: \n", places2Visit);
