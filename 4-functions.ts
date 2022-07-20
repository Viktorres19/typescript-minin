function add(a: number, b: number): number {
	return a + b
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase()
}

// перегружати визначені параметри
interface  MyPosittion {
	x: number | undefined
	y: number | undefined
}

interface MyPosittionWithDefault extends MyPosittion {
	default: string
}

function position(): MyPosittion
function position(a: number): MyPosittionWithDefault
function position(a: number, b: number): MyPosittion

function position(a?: number, b?: number) {
	if  (!a && !b) {
		return {x: undefined, y: undefined}
	}

	if (a && !b) {
		return {x: a, y: undefined, default: a.toString()}
	}

	return {x: a, y: b}
}

console.log('Empty: ', position()) //Empty:  { x: undefined, y: undefined }
console.log('One param: ', position(42)) //One param:  { x: 42, y: undefined, default: '42' }
console.log('Two params: ', position(10, 15)) //Two params:  { x: 10, y: 15 }