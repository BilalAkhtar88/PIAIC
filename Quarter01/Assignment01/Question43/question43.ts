//Reference: https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/

function show_magicians(array2print) {
    for (let i = 0; i < array2print.length; i++){
        console.log(array2print[i]);
    }
}

function make_great(array2modify) {
    for (let i = 0; i < array2modify.length; i++){
        array2modify[i] = array2modify[i] + " the Great"; 
    }
    
    return array2modify; 
}

let names_magicians = ['Harry Houdini', 'David Copperfield', 'David Blaine'];
let clone_magicians = [...names_magicians];

console.log("The original array of names of magicians before modifying function: \n");
show_magicians(names_magicians);
console.log("\n");
clone_magicians = make_great(clone_magicians);
console.log("The original array of names of magicians after modifying function: \n");
show_magicians(names_magicians);
console.log("\nThe copied array of names of magicians with modifications: \n");
show_magicians(clone_magicians);
