//Swapping variables
let a = "red";
let b = "blue";

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


//Returns the max of 2 numbers
function max(a, b) {
    return (a > b) ? a : b;
}

console.log(max(10, 15));


//Returns true if width > height
function isLandscape(width, height) {
    return (width > height);
}

console.log(isLandscape(10, 20));


//Divisible by 3, return Fizz
//Divisible by 5, return Buzz
//Divisible by both, return FizzBuzz
//Not divisible, return number
//Not a number passed, return not a number message
function fizzBuzz(input) {
    if (typeof(input) !== 'number') return console.log(NaN);
    if ((input % 3 === 0) && (input % 5 === 0)) return console.log('FizzBuzz');
    else if (input % 3 === 0) return console.log('Fizz');
    else if (input % 5 === 0) return console.log('Buzz');
    else return console.log(input);
}

fizzBuzz(true);



