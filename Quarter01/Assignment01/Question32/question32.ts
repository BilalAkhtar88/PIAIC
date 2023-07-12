let current_users = ["admin", "bilal", "adeel", "adil", "daniel", "cheema"];

let new_users = ["ali", "adil", "sana","Bilal","maria"];

for (var user of new_users){
    user = user.toLowerCase();
    var availability = 0;

    for (var current_user of current_users){
        current_user = current_user.toLowerCase();
        if (user == current_user){
            availability = 1;
        }
    }

    if (availability == 1){
        console.log(user + " will need to enter a new username.");
    }
    else {
        console.log("Username " + user + " is available.");
    }
}

/*

//Following methods can also be applied to solve the problem:

//Method 1

current_users = current_users.map(curr_user => curr_user.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(new_users[i] + " will need to enter a new username.");
    } else {
        console.log("Username " + new_users[i] + " is available.");
    }
}

//Method 2

for (let newUser of new_users) {
    if (current_users.map(userCurr => userCurr.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(newUser + " will need to enter a new username.");
    } else {
        console.log("Username " + newUser + " is available.");
    }
}

*/