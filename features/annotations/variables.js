let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
// built in objects
let now = new Date();
// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];
// Classes
class Car {
}
let car = new Car();
// Object literal
let point = {
    x: 10,
    y: 20,
};
point.x = 0;
// function
const logNumber = (i) => {
    console.log(i);
};
const logNumber2 = (i) => {
    console.log(i);
};
const numberLog = (i) => {
    console.log(i);
};
// When to use annotations
// 1) Functions that return the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
// When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundword;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundword = true;
    }
}
// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
