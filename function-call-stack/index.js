// function is called first class citizen .

// ----why-----

// *assign to a variable

let greet=function(){
    console.log("hello");
}
greet();


// * pass as a argumet 
function lastName(){
    console.log('kurmi');
}
function fullName(fname,lastName){
    console.log("hello",fname);
    lastName();
}
fullName('vaishali',lastName);



// *can return function


// *use of function in DS
// *function as a Property
// *function array