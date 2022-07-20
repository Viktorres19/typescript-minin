var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// створюються також як ES6 classes
var Typesctipt = /** @class */ (function () {
    function Typesctipt(version) {
        this.version = version;
    }
    Typesctipt.prototype.info = function (name) {
        return "[".concat(name, ": Typescript version is ").concat(this.version);
    };
    return Typesctipt;
}());
// це довше
/*
class Car {
    readonly  model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}*/
// це лаконічніше
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
// модифікатори класів (protected, public, private)
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black'; // публічні доступні для всіх інстанцій
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        //this.go //буде помилка, тому що це приватна властивість
    };
    return Cat;
}(Animal));
var cat = new Cat();
// cat.voice // error - ми можемо тільки працювати через функцію setVoice
// ============== Абстрактні класи
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
