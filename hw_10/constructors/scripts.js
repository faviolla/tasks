// task 1

function Car(brand, age) {
    this.brand = brand;
    this.age = age;

    this.getBrand = function() {
        return this.brand[0].toUpperCase() + this.brand.slice(1);
    };
    this.getYear = function() {
        return (new  Date().getFullYear()) - this.age;
    }
}

let volvo = new Car('volvo', 10);
volvo.getBrand();
volvo.getYear();


// task 2

function StringEncryption(str) {
    let myStr = str;

    this.showOriginalString = function() {
        return myStr;
    }

    this.showEncryptedString = function() {
        return myStr.split('').reverse().join('');
    }
}

let myString = new StringEncryption('Hello world!');