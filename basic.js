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


//Show the number and whether it's even/odd from 0 to limit
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i + ' even');
        else console.log(i + ' odd');
    }
}

showNumbers(10);


//Count # of truthy elements in an array, undefined null '' false 0 NaN are falsy 
function countTruthy(array) {
    let i = 0;

    for (let truthy of array) {
        //if statement will run if element of array results to true/truthy
        if (truthy) i++;
    }

    console.log(i);
}

const array = ['1', '2', 3, null, undefined];

countTruthy(array);


//Display all string properties of an object
function showProperties(obj) {
    for (let string in obj) {
        if (typeof(obj[string]) === 'string') console.log(string, obj[string]);
    }
}

const person = {
    name: "John",
    year: 2002,
    gender: 'male'
};

showProperties(person);


//Calculates the sum of multiples of 3 and 5 below limit
//assuming each number can only be added once
function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0) sum += i;
        else if (i % 5 === 0) sum += i; 
    }

    console.log(sum);
}

sum(10);


//calculates the average mark of a student and outputs a grade
//Improvement: break this into 2 functions, one for calculating average of an array
function calculateGrade(marks) {
    let sum = 0;

    for (let grade of marks) {
        sum += grade;
    }

    let average = sum / marks.length;

    if (average < 60) return console.log('F');
    if (average < 70) return console.log('D');
    if (average < 80) return console.log('C');
    if (average < 90) return console.log('B');
    return console.log('A');
}

let grade = [80, 10, 100];
calculateGrade(grade);


//We should have same # of stars as the row #
//Defined variable pattern because we want to display it as string
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStars(7);


//Show all prime numbers up to the limit, first prime is 2
//Checks each number to see if can be divided to a whole number, if yes then it's not prime
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {

        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(i);
    }
}

showPrimes(20);


