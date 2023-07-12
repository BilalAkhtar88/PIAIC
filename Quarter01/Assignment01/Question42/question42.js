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
show_magicians(names_magicians);
console.log("\n");
names_magicians = make_great(names_magicians);
show_magicians(names_magicians);
