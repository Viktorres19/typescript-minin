// створюємо об'єкт вищезаданного типу
/*
const rect1: Rect = {
    //буде error так як необхідні поля не реалізовані
}*/
//Зараз буде без помилки
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc' // можна також додавати необов'язковий параметр
};
var rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black'; // можна також додавати параметри і значення окремо
//Можемо вказувати до якого типу буде відноситись об'єкт
var rect3 = {}; // вказали до якого типу буде відноситись
var rect4 = {}; //альтернативний старий запис
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());

// ================== інтерфейс з великою кількістю динамічних ключів
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
