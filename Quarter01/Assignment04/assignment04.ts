var famQuote = "If people are doubting how far you can go, go so far that you can’t hear them anymore.";
var quoteAuth = "Michele RuIZ";
//Check for Author name is in Title Case
quoteAuth = quoteAuth.toLowerCase().split(" ").map(l => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(quoteAuth + " once said, \"" + famQuote + "\"");
//Also try by commenting line 4 above
//NOTE: Semicolons are not mandatory in Typescript and Javascript due to existence of ASI (Automatic Semicolon Insertion)