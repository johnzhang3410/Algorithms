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


//Speed limit <= 70, return ok
//Every 5km above speed limit, driver gets 1 point
//12 points -> license suspended
//Way to improve: Use const, define speed limits as const blc easier to change if limit changes
function checkSpeed(speed) {
    if (speed < 75) return console.log('ok');
    if (speed >= 130) return console.log('license suspended');
    else {
        let speeds = speed - 70;
        let points = speeds / 5;
        points = Math.floor(points);
        console.log('Points: ' + points);
    }
}

checkSpeed(65);



