var personName = "    \t  \n  \t  Muhammad Bilal Akhtar \t    \n\n";
//let personName = "    \t  \n Muhammad \n\n\t Bilal      Akhtar \t    \n\n";
console.log("Name with whitespaces:\n", personName);
var no_WS_Name = personName.trim();
console.log("Name without whitespaces:\n", no_WS_Name);
//Note: trim() method does not remove whitespaces in between a string, try uncommenting line 2
