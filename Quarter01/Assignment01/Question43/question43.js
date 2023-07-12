//Reference: https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(array2print) {
    for (var i = 0; i < array2print.length; i++) {
        console.log(array2print[i]);
    }
}
function make_great(array2modify) {
    for (var i = 0; i < array2modify.length; i++) {
        array2modify[i] = array2modify[i] + " the Great";
    }
    return array2modify;
}
var names_magicians = ['Harry Houdini', 'David Copperfield', 'David Blaine'];
var clone_magicians = __spreadArray([], names_magicians, true);
console.log("The original array of names of magicians before modifying function: \n");
show_magicians(names_magicians);
console.log("\n");
clone_magicians = make_great(clone_magicians);
console.log("The original array of names of magicians after modifying function: \n");
show_magicians(names_magicians);
console.log("\nThe copied array of names of magicians with modifications: \n");
show_magicians(clone_magicians);
