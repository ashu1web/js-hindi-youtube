// Immediately Invoked Function Expressions (IIFE)
//USE IIFE TO REMOVE GLOBAL SCOPE POLLUTION

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')