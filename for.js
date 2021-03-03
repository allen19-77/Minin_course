let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]



for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		console.log(numbers[i])
	}
}

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 !== 0) {
		console.log(numbers[i])
	}
}

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		continue
	}
	console.log(numbers[i])
}

numbers.push('10')
for (let i = 0; i < numbers.length; i++) {
	if (typeof numbers[i] === 'string') {
		break
	}
	console.log(numbers[i])

}
