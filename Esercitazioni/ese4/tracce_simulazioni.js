// Esercizio 1: Trova l'indice del primo numero pari.

// NB: La funzione deve restituire la posizione in cui si trova il primo numero pari, non il valore dell'elemento.

// Esempio:
// Input: [1, 3, 5, 2, 8, 7, 9] Output: 3


function findIndexOfFirstEven(numbersArray) {
    for(let i=0;i<numbersArray.length;i++){
        if(numbersArray[i] % 2 == 0){
            return i
        }
    }
    return 0
}
console.log(findIndexOfFirstEven([1, 3, 5, 2, 8, 7, 9]))