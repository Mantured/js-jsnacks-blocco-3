
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


/*BONUS 1
Fai inserire due numeri, che chiameremo N & M, all'utente.
Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
Ogni volta che ne crei uno, stampalo a schermo.
*/

/* let numberUserN = parseInt(prompt('Inserisci un numero'));
let numberUserM = parseInt(prompt('Inserisci un numero'));
while (isNaN(numberUserN)&& isNaN(numberUserM)) {
    numberUserN = parseInt(prompt('Inserisci un numero'));
}

if (numberUserN && numberUserN >= 100) {
    numberUserN = 100;
    numberUserM = 100;
}

const arrays = [];

for (i = 0; i < numberUserN; i++){
    const tempArray = [];
    while (tempArray.length < numberUserM) {
        tempArray.push(Math.floor(Math.random() * 4528) + 4);
    }
    console.log(tempArray);
    arrays.push(tempArray);
}
console.log(arrays); */


/*
BONUS 2
    Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano almeno L.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

/*     let numberUserN = parseInt(prompt('Inserisci un numero N'));
    let numberUserM = parseInt(prompt('Inserisci un numero M'));
    let numberUserL = parseInt(prompt('Inserisci un numero L'));

    while (isNaN(numberUserN) && isNaN(numberUserM) && isNaN(numberUserL)) {
        numberUserN = parseInt(prompt('Inserisci un numero'));
        numberUserM = parseInt(prompt('Inserisci un numero'));
        numberUserL = parseInt(prompt('Inserisci un numero'));
    }

    if (numberUserN && numberUserN >= 100) {
        numberUserN = 100;
        numberUserM = 100;
    }


for (let i = 0; i < numberUserN; i++) {
    let tempArray = [];
    let sum = 0;
    let garbage = [];

    while (tempArray.length < numberUserM && sum < numberUserL) {
        let randomNumber = (Math.floor(Math.random() * 4528) + 4);
        tempArray.push(randomNumber);

        if (tempArray.length === numberUserM) {
            for (let x = 0; x > numberUserM; x++) {
                sum += tempArray[x];
            }
            if (sum >  numberUserL) garbage = [];
        }
        console.log(tempArray);
    }
    console.log(sum);
    console.log(garbage);
} */

/* # BONUS 3

    Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
    Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano al più L.
    Ogni volta che ne crei uno, stampalo a schermo. */
