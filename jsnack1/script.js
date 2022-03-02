
const numbers = [];
const odd = [];
const even= [];

let sum = 0;
while (sum < 200) {
        const number = parseInt(prompt('Inserisci un numero'));
        console.log(number);
        numbers.push(number);
        sum += number;
        console.log(sum);
}

console.log(numbers);
