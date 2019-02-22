/**
 * 
 * @param {String} name 
 * @param {Number} floursNumber 
 */

function Building(name, floursNumber) {
    this.name = name;
    this.floursNumber = floursNumber;
    this.getFloursNumber = function() {
        return this.floursNumber;
    }
    this.setFloursNumber = function(value) {
        return this.floursNumber = value;
    }
 }

 /**
  * 
  * @param {String} name 
  * @param {Number} floursNumber 
  * @param {Number} flourFlatsNumber 
  */
 
 function House(name, floursNumber, flourFlatsNumber) {
    Building.call(this);
    this.name = name;
    this.floursNumber = floursNumber;
    this.flourFlatsNumber = flourFlatsNumber;
    let BuildingGetFloursNumber = this.getFloursNumber;
    this.getFloursNumber = function() {
        this.floursNumber = BuildingGetFloursNumber.call(this);
        return {
            'этажи': this.floursNumber,
            'всего Квартир': this.floursNumber * this.flourFlatsNumber
        };
    }
 }

 let myHome = new House('myHome', 5, 2);
 myHome.getFloursNumber(); //{этажи: 5, всего Квартир: 10}

 /**
  * 
  * @param {String} name 
  * @param {Number} floursNumber 
  * @param {Number} flourShopsNumber 
  */

 function Mall(name, floursNumber, flourShopsNumber) {
    Building.call(this);
    this.name = name;
    this.floursNumber = floursNumber;
    this.flourShopsNumber = flourShopsNumber;
    let BuildingGetFloursNumber = this.getFloursNumber;
    this.getFloursNumber = function() {
        this.floursNumber = BuildingGetFloursNumber.call(this);
        return {
            'этажи': this.floursNumber,
            'всего Магазинов': this.floursNumber * this.flourShopsNumber
        }
    }
 }

 let myMall = new Mall('myMall', 3, 20);
 myMall.getFloursNumber(); //{этажи: 3, всего Магазинов: 60}