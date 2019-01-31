// task 1

let object = {
    product: 'iphone'
}
object.price = 1000;
object.currency = 'dollar';
object.details = {
    model: 'X',
    color: 'black'
}


// task 2

let a = 0 || 'string'; // string
/** значение типа "string" преобразуется неявным способом в число = 1, т.к. строка не пустая
 *  оператор "ИЛИ" выбирает хотябы одно значение, которое "true"
 *  булевое значение 0 - это false, а 1 - true
 *  поэтому в данном примере ответ - 'string'
 */

a = 1 && 'string'; // string
/** значение типа "string" преобразуется неявным способом в число = 1, т.к. строка не пустая
 *  оператор "И" проверяет все значения, и чтобы условие выполнилось, все значения должны быть "true"
 *  в данном примере условие выполнено и ответ последнее правдивое значение - 'string'
 */

a = null || 25; // 25
/** null - это false, а 25 - true
 * false "ИЛИ" true = true
 * поэтому ответ 25
 */

a = null && 25; // null
/**
 * оператор "И" находит первое значение false и останавивается
 * поэтому он нашел значение null, что есть false и остановил свое выполнение
 */

a = null || 0 || 35;  // 35
/**
 * выводится последнее правдивое значение (true) - это 35
 */

a = null && 0 && 35; // null
/**
 * null - это false
 * выводится первое неправдивое значение,
 * которое находится при логическом операторе "И"
 */


console.log(12 + 14 + '12'); // "2612"
/** происходит сложение первых двух чисел 12 + 14 = 26
 * а дальше идет строка и поэтому число 26 преобразуется в строку и происходит конкатенация строк - 
 * получается строка 2612 
 */

console.log(3 + 2 - '1'); // 4
/**
 * строка "1" преобразуется в число, т.к. перед ней стоит опрератор "-"
 * и получается 3 + 2 = 5 - 1 = 4
 */

console.log('3' + 2 - 1); // "31"
/**
 * выполняется конкатенация строк "3" и "1"
 * строка "1" получилась из числа 1, которое преобразовалось неявным способом
 */

console.log(true + 2); // 3
/**
 * булевый тип данных значения true преобразовался в число 1
 * поэтому путем сложения чисел 1 и 2 получили результат 3
 */

console.log(+'10' + 1); // 11
/**
 * оператор + перед строкой "10" преобразовал ее в число 10
 * поэтому получили результат число 11
 */

console.log(undefined + 2); // NaN
/**
 * интерпритатор попытался преобразовать значение undefined в число, но безуспешно
 * поэтому вернул результат not a number
 */

console.log(null + 5); // 5
/**
 * null преобразовалось в число 0, поэтому 0 + 5 = 5
 */

console.log(true + undefined); // NaN
/**
 * true преобразовалось в число 1
 * undefined - не преобразовалось в число
 * поэтому 1 + непонятное для js значение = not a number
 */


// task 3
// task 3.1

let variable;

if (variable == 'hidden') {
    variable = 'visible';
} else {
    variable = 'hidden';
}

// task 3.2

let someVariable;
if (someVariable == 0) {
    someVariable = 1;
} else if (someVariable < 0) {
    someVariable = 'less then zero';
} else if (someVariable > 0) {
    someVariable *= 10;
}

// task 3.3

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}

if(car.age > 5) {
    console.log('need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

// task 4

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}

if('discount' in item) {
    item.priceWithDiscount = parseInt(item.price) - parseInt(item.price) * parseInt(item.discount) / 100 + '$';
    console.log('Price with discount: ' + item.priceWithDiscount);
} else {
    console.log('Price:' + item.price);
}

// task 6

let product = {
    name: 'Яблоко',
    price: '10$'
}

let min = 10,
    max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log('Product name: ' + product.name);
} else {
    console.log('Product not found');
}
