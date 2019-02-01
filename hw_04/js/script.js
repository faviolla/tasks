// task 1

function multiply() {
    let multiplication = 1;
    for (let element of arguments) {
        multiplication *= element;
    }
    return arguments.length === 0 ? 0 : multiplication;
}

multiply();

// task 2

function reverseString(str) {
    let letters = str.split(''),
        newString = letters.reverse().join('');

    return 'Reversed String: ' + newString;
}
reverseString('test string');

// task 3

function getCodeStringFromText(str) {
    let array = str.split(''),
        newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charCodeAt());
    }
    return newArray.join(' ');
}

getCodeStringFromText('tes123');

// task 4

function guessNumber(num) {
    // let num = num;
    if (typeof(num) === 'number' && num > 0 && num <= 10) { 
        let randomNum;
        randomNum = Math.round(Math.random()*10);
        if ( num === randomNum) {
            return 'You win!';
        } else {
            return 'You lose. Your number is ' + num + ' but winning number is ' + randomNum;
        }
    } else {
        return 'Choose the number from 1 to 10';
    }
}

guessNumber(8);

// task 5

function getArray(num) {
    if (typeof(num) === 'number') {
        let arr = [num];
        for (let i = num; i > 1; i--) {
            arr.unshift(i - 1);
        }
        return arr;
    } else {
        return 'Not a number';
    }
}
getArray(8);

// task 6

function doubleArray(arr) {
    return arr.concat(arr);
}
doubleArray([1,3,5]);

// task 7
function changeCollection(arr) {
    let resArray = [];
    for (let elem of arguments) {
        elem.splice(0,1);
        resArray.push(elem);
    }
    return resArray;
}
changeCollection([2,3,4],['a','b','c']);

//task 8
let users = [{
    name: 'Denis',
    age: 29,
    'gender': 'male'
},{
    name: 'Ivan',
    age: 20,
    'gender': 'male'
},{
    name: 'Eva',
    age: 24,
    'gender': 'female'
},{
    name: 'Jennifer',
    age: 25,
    'gender': 'female'
}];

function funcGetUsers(users, usersKey, usersValue) {
    if (typeof users !== 'object' || users == undefined) return console.log('error');
    if (usersKey == undefined) return console.log('error');
    if (usersValue == undefined) return console.log('error');
    
    let keys, values, sortUsers = [];

    for (let key of users) {
        keys = Object.keys(key);
        values = Object.values(key);
        for (let i in key) {    
            if (i == usersKey && key[i] == usersValue) {
                sortUsers.push(key);
            }
        }
    }
    return sortUsers;
}