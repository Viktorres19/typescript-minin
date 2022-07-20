// Primitives
const str: string = 'Hello'

// console.log(str)

const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42 //number
//int = '4' // error
const float: number = 4.2 //number
const num: number = 3e10 //number

const message: string = 'Hello Typescript' //string



//Arrays
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

//Tuple - array consists of different types of data
const contact: [string, number] = ['Vladilen', 123435] // correct

// Any types in variable
let variable: any = 42



// === Functions
function sayMyName(name: string): void { // треба вказувати, коли функція нічого не повертає
	console.log(name)
}
sayMyName('Хайзенберг')

// Never
function throwError(message: string): never {
	throw new Error(message)
}

function infinite(): never { // ця функція ніколи не закінчиться, тому ми поставили never
	while (true) {

	}
}



// Type - конструкція, яка допомагає нам створювати свої власні типи
type Login = string // alias
const login: Login = 'admin' // write
//const login2: Login = 2 // error

type ID = string | number // can be or string or number
const id1: ID = 1234 //success
const id2: ID = '1234' //success
//const id3: ID = true //error

// null, undefined
type SomeType = string | null | undefined
