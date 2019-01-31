let string = 'happy new year';

//task 1
console.log('first letter: ' + string[0]);
console.log('first letter: ' + string.charAt(0));
console.log('last letter: ' + string[string.length - 1]);
console.log('last letter: ' + string.charAt(string.length - 1));

//task 2
console.log('uppercase first letter: ' + string[0].toUpperCase());
console.log('uppercase last letter: ' + string[string.length - 1].toUpperCase());

//task 3
console.log('position \'year\': ' + string.indexOf('year'));

//task 4
console.log('second backspase position: ' + string.lastIndexOf(' '));

//task 5
console.log('substring from 5 symbol: ' + string.substr(4,4));

//task 6
console.log('substring from 5 symbol: ' + string.substring(4,9));

//task 7
let str = string.slice(0,-6)
console.log('new str:' + str);

//task 8
let a = 20,
    b = 16,
    string1 = a+b.toString();
console.log(string1);
console.log(`${a}${b}`);


// Numbers
//task 1
console.log('PI: ' + parseFloat(Math.PI.toFixed(2)));

//task2
console.log('max: ' + Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log('min: ' + Math.min(15, 11, 16, 12, 51, 12, 13, 51));

//task3
console.log(Math.random().toFixed(2));
console.log(Math.round(Math.random()*100));

//task4
console.log((0.6 + 0.7).toFixed(1));

//task 5
console.log(parseInt('100$'));