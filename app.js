// Kokeb A Beyene
// Id No 108424
// Date 4/16/2017
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// (111111111111111111111111111111111111111111111111111111
var money;
var bankAcount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var name;
var hobbies;
var myself = {
    name: "Assad",
    bankAcount: bankAcount,
    hobbies: ["violin", "Cooking"]
};
var yourself = myself.bankAcount.deposit(3000);
console.log(yourself);
//22222222222222222222222222222222222222222222222222
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('${this.name} is saying tooooooot!');
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
;
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
//33333333333333333333333333333333333333333333333
var baseObject = (function () {
    function baseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    baseObject.prototype.calSize = function () {
        console.log(this.width * this.length);
    };
    return baseObject;
}());
;
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    return rectangle;
}(baseObject));
var myrec = new rectangle(5, 2);
console.log(myrec.calSize());
//444444444444444444444444444444444444444444444
var person = (function () {
    function person() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
;
var myperson = new person();
myperson.firstName = "Assad";
console.log(myperson.firstName);
