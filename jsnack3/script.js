/**
 *
 *
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l'altro di verde.
Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
Se sono pari li stampo nell'div "rosso",
se sono dispari li stampo nell'div "verde".
 *
 */

const redDiv = document.getElementById('red');
const greenDiv = document.getElementById('green');

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < newArray.length; i++) {
    if (isEven(newArray[i])) {
        console.log(newArray[i] + " is an even number");
        redDiv.innerHTML += newArray[i] + " , ";
    } else {
        console.log(newArray[i] + " is an even number");
        greenDiv.innerHTML += newArray[i] + " , ";
    }
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


