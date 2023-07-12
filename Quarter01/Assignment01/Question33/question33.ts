let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const nums of num_array){
    if (nums == 1){
        console.log(nums + "st");
    }
    else if (nums == 2){
        console.log(nums + "nd");
    }
    else if (nums == 3){
        console.log(nums + "rd");
    }
    else {
        console.log(nums + "th");
    }
}