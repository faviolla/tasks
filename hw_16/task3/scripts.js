/**
 * 
 * @param {String} name 
 * @param {Number} price 
 */
function Furniture(name, price) {
    this._name = name;
    this._price = price;
}

Furniture.prototype.getInfo = function() {
    return `Name is ${this._name}. Price is ${this._price}`;
}

function OfficeFurniture() {
    Furniture.apply(this, arguments);
}
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function(number = 0) {
    this.hasRollers = number;
    return Furniture.prototype.getInfo.call(this) + '. It has rollers: ' + this.hasRollers;
}

function HomeFurniture() {
    Furniture.apply(this, arguments);
}
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getInfo = function(number = 2) {
    this.hasPillow = number;
    return Furniture.prototype.getInfo.call(this) + '. Pillows: ' + this.hasPillow;
}