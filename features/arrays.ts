/* LESSON 618: Arrays in TypeScript */
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//const carsByMake = [['f150', 'corolla', 'camaro']];
const carsByMake: string[][] = [];

// help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
