/*

References for understanding Object Type in typescript: 

1. https://www.w3schools.com/typescript/typescript_object_types.php
2. https://www.tutorialspoint.com/typescript/typescript_objects.htm
3. https://www.typescriptlang.org/docs/handbook/2/objects.html

*/

type CountryDetails = {
    capital: string; 
    currency: string; 
    area_kmSq: number;
}

const pakistan: CountryDetails = {
    capital: "Islamabad",
    currency: "Pakistani Rupee",
    area_kmSq: 796095
}

console.log(pakistan);