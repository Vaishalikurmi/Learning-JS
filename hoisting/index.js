//** variable hoisting using var ***//
//With variables declared var , the variable declaration is hoisted but with a default value of undefined 
console.log(age);
var age=5;



//** fuction hoisting ***//

//the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.4 Aug 2023

// printName("vaishali");

function printName(name){
    console.log(name);
}

