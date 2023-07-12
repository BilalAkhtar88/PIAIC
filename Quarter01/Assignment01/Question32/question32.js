var current_users = ["admin", "bilal", "adeel", "adil", "daniel", "cheema"];
var new_users = ["ali", "adil", "sana", "Bilal", "maria"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    user = user.toLowerCase();
    var availability = 0;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        current_user = current_user.toLowerCase();
        if (user == current_user) {
            availability = 1;
        }
    }
    if (availability == 1) {
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
