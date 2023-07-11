//Author: Muhammad Bilal Akhtar
//Current Date is 11 July 2023

/* This is Question 4 of Assignment 1 of Quarter 1 of PIAIC Course repeated, to understand the concept of comments.
In Question 4, we had to print a famous quote along with author name.*/

var famQuote = "If people are doubting how far you can go, go so far that you can’t hear them anymore.";
var quoteAuth = "Michele RuIZ";
//Check for Author name is in Title Case
quoteAuth = quoteAuth.toLowerCase().split(" ").map(l => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(quoteAuth + " once said, \"" + famQuote + "\"");

//NOTE: Semicolons are not mandatory in Typescript and Javascript due to existence of ASI (Automatic Semicolon Insertion)