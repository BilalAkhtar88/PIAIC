var personName = "MuhammAd bilAl AkHTar";
console.log("The name in Original text: ", personName);

//Convert and display person name in lower case
var nameLowerCase = personName.toLowerCase();
console.log("The name in Lower case: ", nameLowerCase);

var nameUpperCase = personName.toUpperCase();
console.log("The name in Upper case: ", nameUpperCase);

// to title case
var nameTitleCase = personName.toLowerCase().split(" ").map(l => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log("The name in Title Case: ", nameTitleCase);