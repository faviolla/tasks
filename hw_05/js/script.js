// task 1

function firstFunc(arr, handler) {
    let newStr = '';
    for (let i of arr) {
        newStr += handler(i);
    }   
      
    return 'New value: ' + newStr; 
}
  
function handler1(el) {
    return el[0].toUpperCase() + el.slice(1);
}
function handler2(el) {
    return el + '0, ';
}
function handler3(el) {
    return el.name + ' is ' + el.age + ', ';
}
function handler4(el) {
    return el.split('').reverse().join('') + ', ';
}

firstFunc(['my', 'name', 'is', 'Trinity'], handler1);
firstFunc([10, 20, 30], handler2);
firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3);
firstFunc(['abc', '123'], handler4);

// task 2

function every(arr, handler) {
    if (!Array.isArray(arr)) return 'First parameter must be Array';

    for (let i of arr) {
        if (handler(i) == false) return false;
    }   
        
    return true; 
}
  
function everyCallback(el) {
    return el > 5;
}

every([6, 6, 5, 9], everyCallback);

// task 3

function digitOdd(arr) {
    let digitalArray = [],
        odd;

    arr.forEach(function(digit, i, arr) {
        odd = !!(digit % 2);
        digitalArray.push({digit, odd})
    });

    return digitalArray;
}

digitOdd([1,2,3,5,8,9,10]);

// task 4

arrWithNull([12, 4, 50, 0, 50, 18, 40]);
function arrWithNull(arr) {
    return arr.every(function(el) {
        return el > 0 || el < 0;
    });
}

// task 5

bigLetter(['yes', 'hello', 'no', 'easycode', 'what'])
function bigLetter(arr) {
    return arr.some(function(el) {
        return el.length > 3
    })
}

// task 6
let str = [{char:"a",index:12}, {char:"w",index:8}];
let lettersSet = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

sentence(str);
function sentence(arr) {
    let newStr = '';
    let newArr = [];

    arr.forEach(function(el,i,arr) {
        // newStr =+ 

        newStr += arr.sort(function(el, elNext) {
            return el.index - elNext.index;
        }).char;
    })

    return console.log(newStr);
}

function compareNumeric(a, b) {
    return a - b;
}