let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let wordsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

const number = Number.parseInt(prompt('Enter a number (0 - 10)'));

// if(number === Number.NaN || number === null || number === undefined) {
//   alert("Enter a number (0 - 10)");

//   return false;
// }

// if(number < 0 || number > 10) {
//   alert("Enter a number (0 - 10)");

//   return false;
// }

alert(`The number ${number} in words is: ${wordsArray[number]}`);
