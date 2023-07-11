let list_Guests = ["Grandpa", "Adeel", "Daniel"];
list_Guests.forEach(guest => {console.log("Dear", guest, ", I am missing you a lot! I am writing to invite you to have dinner with me this Sunday, pls.")});

console.log("\nDear", list_Guests[0], "it makes me sad that you can not join me in dinner from heavens!\n" );

list_Guests[0] = "Grandma";
list_Guests.forEach(guest => {console.log("Dear", guest, ", I am missing you a lot! I am writing to invite you to have dinner with me this Sunday, pls.")});

console.log("\nYou are all informed that I found a bigger dinner table!\n");

list_Guests.unshift("Teacher Sumera");

//Reference for using splice method: https://masteringjs.io/tutorials/fundamentals/array-splice
list_Guests.splice(list_Guests.length / 2, 0, "Boss");

//Reference for append method equivalent in typescript: https://www.tutorialspoint.com/how-to-push-an-element-to-the-last-of-an-array-in-typescript#:~:text=In%20TypeScript%2C%20an%20array%20can,use%20the%20push()%20method.
list_Guests.push("Mahira Khan");
list_Guests.forEach(guest => {console.log("Dear", guest, ", I am writing to invite you to have dinner with me this Sunday, pls.")});