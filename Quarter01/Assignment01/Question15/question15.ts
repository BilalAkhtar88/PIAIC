let list_Guests = ["Grandpa", "Adeel", "Teacher Sumera", "Daniel"];
list_Guests.forEach(guest => {console.log("Dear", guest, ", I am missing you a lot! I am writing to invite you to have dinner with me this Sunday, pls.")});

console.log("\nDear", list_Guests[0], "it makes me sad that you can not join me in dinner from heavens!\n" );

list_Guests[0] = "Grandma";
list_Guests.forEach(guest => {console.log("Dear", guest, ", I am missing you a lot! I am writing to invite you to have dinner with me this Sunday, pls.")});
