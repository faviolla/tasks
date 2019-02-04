// task 1

class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');


// task 2

class ComponentNew {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
    }
}

const compNew = new ComponentNew('span');
  

// task 3

class Calculator {
    constructor(value) {
        this._number = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }

    addValue(value) {
        this._number += value;
    }
    subtract(value) {
        this._number -= value;
    }
    multiply(value) {
        this._number *= value;
    }
    divide(value) {
        this._number /= value;
    }
}

const calc = new Calculator(1);
calc.addValue(13);
calc.divide(2);