const prompt = require('prompt-sync')({signant: true });

const array = JSON.parse(prompt('Enter an array '));

const lastName = array[array.length - 1];

console.log('The last Item is', lastName);
