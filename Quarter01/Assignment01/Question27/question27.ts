//References Difference between strict equality and equality operators in typescript: 
//1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
//2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

let alien_color = "green";

if (alien_color == "green"){
    console.log("You just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("You just earned 10 point.");
}
else if(alien_color == "red"){
    console.log("You just earned 15 point.");
}

alien_color = "yellow";

if (alien_color == "green"){
    console.log("You just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("You just earned 10 point.");
}
else if(alien_color == "red"){
    console.log("You just earned 15 point.");
}

alien_color = "red";

if (alien_color == "green"){
    console.log("You just earned 5 points.");
}
else if(alien_color == "yellow"){
    console.log("You just earned 10 point.");
}
else if(alien_color == "red"){
    console.log("You just earned 15 point.");
}
