const prompt = require('prompt-sync')({signant: true });

const array = JSON.parse(prompt('Enter an array '));

const firstName = array[0];

console.log('The last Item is', firstName);
