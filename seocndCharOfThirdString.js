const prompt = require('prompt-sync')({signant: true });

console.log('Enter an array: ');
const array = JSON.parse(prompt('Enter an array '));
console.log("");

const thirdElement = array[2][1];

if (typeof thirdElement !== 'sring') {
    const secondChar = thirdElement[1];
    console.log("The Third Item from is: " + secondChar);
}   else {
    console.log("Error Not A String");
}

const secondChar = thirdElement[1];

console.log('secondChar' , secondChar);