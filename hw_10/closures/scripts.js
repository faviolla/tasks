// task 1

function minus(x = 0) {
    return function(y = 0) {
        return x - y;
    }
}

minus()(6);
minus()();

// task 2

function MultiplyMaker(x) {
    return function(y) {
        return x *= y;
    }
}

const multiply = MultiplyMaker(2);
multiply(2);
multiply(1); 
multiply(3); 
multiply(10);


// task 3

 const module = (function() {
     let str = '';

    function setString(value = '') {
        str = value.toString();
    }
    function getString() {
        return str;
    }
    function getStringLength() {
        return str.length
    }
    function getReverseString() {
        return str.split('').reverse().join('');
    }

    return {
        setString: setString,
        getString: getString,
        getStringLength: getStringLength,
        getReverseString: getReverseString
    };
 })();

 module.setString('HeLLo');
 module.getString();
 module.getStringLength();
 module.getReverseString();


// task 4

const calculator = (function() {
    let value = 0;

    function setValue(val = 0) {
        value =  parseFloat(val.toFixed(2));
    }

    function getValue() {
        value = Math.round(value)
        return value;
    }
    function addValue(x) {
        return parseFloat((value += x).toFixed(2));
    }
    function multiply(x) {
        return parseFloat((value *= x).toFixed(2));
    }
    function subtract(x) {
        return parseFloat((value -= x).toFixed(2));
    }
    function divide(x) {
        return parseFloat((value /= x).toFixed(2));
    }
    function pow(x) {
        value = Math.pow(value, x)
        return parseFloat(value.toFixed(2));
    }

    return {
        setValue: setValue,
        getValue: getValue,
        addValue: addValue,
        multiply: multiply,
        subtract: subtract,
        divide: divide,
        pow: pow
    }
})();

calculator.setValue(12);
calculator.addValue(15);