//To allow includes method to work properly use following references:
//1. https://stackoverflow.com/questions/40545329/property-includes-does-not-exist-on-type-string
//2. https://github.com/s-panferov/awesome-typescript-loader/issues/329

let myName = 'Muhammad Bilal Akhtar';
console.log("Is my name != 'Muhammad Bilal'? I predict False.");
console.log(myName != 'Muhammad Bilal');

let pakistan_Capital = 'Islamabad';
console.log("Is capital of Pakistan == 'Islamabad'? I predict True.");
console.log(pakistan_Capital == 'Islamabad');

let highestMountPak = 'K2';
console.log("Is highest peak of Pakistan == 'k2' in lowercase? I predict True.");
console.log(highestMountPak.toLowerCase() == 'k2');

let fruitName = 'App!e';
console.log("Is fruit name I wrote == 'apple' in lowercase? I predict False.");
console.log(fruitName == 'apple');

let myFavNum = 3;
console.log("Is my favorite number == 3? I predict True.");
console.log(myFavNum == 3);

console.log("Is my favorite number != 2? I predict False.");
console.log(myFavNum != 2);

console.log("Is my favorite number > 0? I predict True.");
console.log(myFavNum >= 0);

console.log("Is my favorite number < 0? I predict False.");
console.log(myFavNum < 0);

console.log("Is my favorite number >= 0? I predict True.");
console.log(myFavNum >= 0);

console.log("Is my favorite number <= 02? I predict False.");
console.log(myFavNum <= 2);

let light = 'on';
let fan = 'on';
let ac = 'on';
let season = 'winter';

console.log("Is fan == 'on' and season == 'summer'? I predict False.");
console.log((fan == 'on') && (season == 'summer'));

console.log("Is fan == 'on' or ac == 'off'? I predict True.");
console.log((fan == 'on') || (ac == 'off'));

const list_languages = ['English', 2, 'Punjabi', 'Urdu'];

console.log("Is Bengali included in list of languages? I predict False.");
console.log(list_languages.includes('Bengali'));

console.log("Is Urdu included in list of languages? I predict True.");
console.log(list_languages.includes('Urdu'));