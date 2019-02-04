// task 1

 const rectangle = {
     width: 20,
     height: 10,
     getSquare: function getSquare () {
        return console.log(this.width * this.height);
     }
 }

 rectangle.getSquare();


// task 2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function getPrice() {
        return console.log(this.price)
    },
    getPriceWithDiscount: function getPriceWithDiscount() {
        return console.log(this.price - (this.price * parseFloat(this.discount)) / 100)
    }
    
}

price.getPrice();
price.getPriceWithDiscount();


// task 3

 const object = {
    height: 10,
    increment: function increment() {
        return this.height++;
    }
 }
 object.height;
 object.increment();
 object.height;


 // task 4

const numerator = {
    value: 1,
    double: function() { 
        this.value *= 2;
        return this 
    },
    plusOne: function() { 
        this.value++;
        return this 
    },
    minusOne: function() { 
        this.value--;
        return this 
    }
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value;


// task 5

const product = {
    price: 20,
    count: 5,
    totalPrice: function totalPrice() {
        return this.price * this.count
    }
}
product.totalPrice();


// task 6

const product2 = {
    price: 40,
    count: 2
}

let totalPrice = product.totalPrice;
totalPrice.call(product2);


// task 7

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

getSquare.apply(sizes);


// task 8

let element = {
    height: 25,
    getHeight: function() {return this.height;}
};

let getElementHeight = () => element.getHeight();
getElementHeight();