const prompt = require('prompt-sync')({signant: true });

const array = JSON.parse(prompt('Enter an array '));

const isLongList = array.legnth >= 10;

console.log('list is long:', isLongList);