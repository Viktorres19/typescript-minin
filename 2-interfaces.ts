// створили інтерфейс
interface Rect {
	readonly id: string // незмінне
	color?: string //необов'язковий параметер
	size: {
		width: number
		height: number
	}
}
// створюємо об'єкт вищезаданного типу
/*
const rect1: Rect = {
	//буде error так як необхідні поля не реалізовані
}*/
//Зараз буде без помилки
const rect1: Rect = {
	id: '1234',
	size: {
		width: 20,
		height: 30
	},
	color: '#ccc' // можна також додавати необов'язковий параметр
}
const rect2: Rect = {
	id: '12345',
	size: {
		width: 10,
		height: 5
	}
}
rect2.color = 'black' // можна також додавати параметри і значення окремо

//Можемо вказувати до якого типу буде відноситись об'єкт
const rect3 = {} as Rect // вказали до якого типу буде відноситись
const rect4 = <Rect>{} //альтернативний старий запис

// ===================== Наслідування інтерфейсів
interface RectWithArea extends Rect { // буде наслідувати Rect
	getArea: () => number // і окрім цього буде мати іще один пункт
}
const rect5: RectWithArea = {
	id: '123',
	size: {
		width: 20,
		height: 20
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

// ===================== Взаємоція інтерфейсів з класами (інтерфейс часто називають з великої літери)
interface IClock {
	time: Date
	setTime(date: Date): void // буде приймати параметр з типом Date
}
class Clock implements IClock {
	time: Date = new Date()

	setTime(date: Date): void {
		this.time = date
	}
}