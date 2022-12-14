let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

point.x = 0;

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const logNumber2 = (i: number): void => {
  console.log(i);
};

const numberLog = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundword: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundword = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
export {};
