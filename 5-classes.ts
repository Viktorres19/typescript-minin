// створюються також як ES6 classes
class Typesctipt {
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}: Typescript version is ${this.version}`
	}
}

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
class Car {
	readonly numberOfWheels: number = 4
	constructor(readonly model: string) {}
}



// модифікатори класів (protected, public, private)
class Animal {
	protected  voice: string = ''
	public color: string = 'black' // публічні доступні для всіх інстанцій

	private  go() { // приватні методи доступні тільки в тому класі в якому були визначені
		console.log('Go')
	}
}

class Cat extends  Animal {
	public setVoice(voice: string): void {
		this.voice = voice
		//this.go //буде помилка, тому що це приватна властивість
	}
}

const cat = new Cat()
// cat.voice // error - ми можемо тільки працювати через функцію setVoice



// ============== Абстрактні класи
abstract class Component {
	abstract render(): void // нічого не повертає
	abstract  info(): string // строку
}

class AppComponent extends  Component {
	render(): void {
		console.log('Component on render')
	}

	info(): string {
		return 'This is info';
	}
}
