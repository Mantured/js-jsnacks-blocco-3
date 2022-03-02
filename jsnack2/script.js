
/*BONUS 1
Fai inserire due numeri, che chiameremo N & M, all'utente.
Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
Ogni volta che ne crei uno, stampalo a schermo.
*/


/* let numberUser = parseInt(prompt('Inserisci un numero'));
while (isNaN(numberUser)) {
    numberUser = parseInt(prompt('Inserisci un numero'));
}

if (numberUser >= 100) {
    numberUser = 100;
}

const arrays = [];

for (i = 0; i < numberUser; i++){
    const tempArray = [];
    while (tempArray.length < 10) {
        tempArray.push(Math.floor(Math.random() * 4528) + 4);
    }
    console.log(tempArray);
    arrays.push(tempArray);
}
console.log(arrays); */

let numberUserN = parseInt(prompt('Inserisci un numero'));
let numberUserM = parseInt(prompt('Inserisci un numero'));
while (isNaN(numberUser)) {
    numberUser = parseInt(prompt('Inserisci un numero'));
}

if (numberUser >= 100) {
    numberUser = 100;
}

const arrays = [];

for (i = 0; i < numberUser; i++){
    const tempArray = [];
    while (tempArray.length < 10) {
        tempArray.push(Math.floor(Math.random() * 4528) + 4);
    }
    console.log(tempArray);
    arrays.push(tempArray);
}
console.log(arrays);