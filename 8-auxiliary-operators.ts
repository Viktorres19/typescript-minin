interface Person {
	name: string
	age: number
}

type PersonKeys = keyof Person // 'name' | 'age' - може приймати тільки одне з двох значень
const key: PersonKeys = 'name'
key = 'age'
type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}
// хочемо створити новий тип, який не включає деякі поля
//type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// other case
type UserKeysNoMeta = Pick<User, 'name' | 'email'> // 'name | 'email'
//let u1: userKeysNoMeta1 = 'name'
//u1 = '_id' // error