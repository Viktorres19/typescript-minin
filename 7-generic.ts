const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']

// буває коли одна функція може працювати з різними типами даних
function reverse<T>(array: T[]): T[] { // повертає масив
	return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)