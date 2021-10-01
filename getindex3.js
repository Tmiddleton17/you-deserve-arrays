const prompt = require('prompt-sync')({signant: true });

const array = JSON.parse(prompt('Enter an array '));

let forthOrLast;

if (array < 4) {
    forthOrLast = array[array.length - 1];
} else {
    forthOrLast = array[3];
}

console.log('The forth (or last) Item is', forthOrLast);

// ==================

const arr = [1, 2, 3, 4, 5];