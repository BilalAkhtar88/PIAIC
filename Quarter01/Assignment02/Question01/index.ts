// Question: Is there an alternative method available to transpile our TypeScript code without executing the tsc command?

// Answer: 
//1. https://code.visualstudio.com/docs/typescript/typescript-compiling
//2. https://khalilstemmler.com/blogs/typescript/node-starter-project/

//Step1:
let message:string = 'Hello World!';
console.log(message);

//Step2:

/*

// DELETE line 11 & line 29 to uncomment the code below after selecting tsc:watch -tsconfig.json from Terminal > Run Build Task... 

//Running the javascript code directly after selecting transcript watch option from Terminal > Run Build Task...:
let message2:string = 'Hello World 2 after running typescript build task!';
console.log(message2);

//Make changes after some pause, keeping the watch option active
let message3:string = 'Still Hello World!';
console.log(message3);

//Make changes after some pause, keeping the watch option active
let message4:string = 'Still Hello World!';
console.log(message4);

//To close the watch option first select build option then press any key to close.

*/