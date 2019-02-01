// part 1
//task 1

let a = 'none';
switch (a) {
    case 'block': 
        console.log('block');
        break;
    case 'none': 
        console.log('none');
        break;
    case 'inline': 
        console.log('inline');
        break;
    default: console.log('other');
}

// task 2

let variable = 'hidden';
variable === 'hidden' ? variable = 'visible' : variable = 'hidden';


let someVariable = 1;
someVariable === 0 ? someVariable = 1 : someVariable < 0 ? someVariable = 'less then zero' : someVariable *= 10;

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

car.age > 5 ? (console.log('need Repair'), car.needRepair = true) : car.needRepair = false;

// part 2
// task 1

let string = 'i am in the easycode';
let newString = '';
for (let i = 0; i < string.length; i++) {
    newString += (string[i - 1] == ' ' || i == 0) ? string[i].toUpperCase() : string[i];
}
console.log(newString);

// task 2
let someString = 'tseb eht ma i';
let someStringNew = '';
for (let i = someString.length - 1; i >= 0; i--) {
    someStringNew += someString[i];
}
console.log(someStringNew);

// task 3

let factorial = 1;
let num = 10;
for (let i = 2; i <= num + 1; i++) {
    factorial *= (i-1);
}
console.log(factorial);

// task 4

let stringJS = 'JavaScript is a pretty good language';
let newStringJS = '';
let newStringJSWithoutSpaces = '';
for (let i = 0; i < stringJS.length; i++) {
    newStringJS += stringJS[i - 1] == ' ' ? stringJS[i].toUpperCase() : stringJS[i];
}
for (let i = 0; i < newStringJS.length; i++) {
    newStringJSWithoutSpaces += newStringJS[i] == ' ' ? '' : newStringJS[i]
}
console.log(newStringJSWithoutSpaces);

// task 5

let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of oddNumbers) {
    value % 2 === 1 ? console.log(value) : '';
}

// task 6

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let value in list) {
    typeof(list[value]) === 'string' ? list[value] = list[value].toUpperCase() : '';
}