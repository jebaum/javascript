// this is actually chapters 1 + 2, intro to programming and intro to javascript
// 3/27/2016


/* CH1 - INTRO TO PROGRAMMING */

// Javascript types
var a = "string";
var b = 42; // number
var c = true; // boolean
var d = false;

var e = Number(a); // coercion between string and number

console.log((99.9999).toFixed(2)); // specify decimal points

// while loops, do..while loops, for loops


function myFunc(yo) {
    console.log('sup');
    console.log(yo);
}
myFunc('dude');


// basic scoping - javascript uses lexical scoping
// each function gets its own scope

function outer() {
    var a = 1;

    function inner() {
        var b = 2;
        console.log(a+b); // 3, inner scope has access to outer scope
    }
    inner();
    console.log(a); // only have access to a in outer scope
}
outer();


/* CH2 - INTRO TO JAVASCRIPT */
// overview of rest of material

