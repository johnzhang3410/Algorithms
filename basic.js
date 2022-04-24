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
