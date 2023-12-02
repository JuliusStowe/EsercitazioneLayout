// Esercizio 2: Conta il numero di numeri negativi nell'array

//  Esempio:
//  Input: [-1, 5, -7, 2, -3, 8] Output: 3

 function countNegativeNumbers(numbersArray) {
    let cont=0;
    for(let i=0;i<numbersArray.length;i++){
    if(numbersArray[i]<0){
        cont+=1
    }
    }
    return cont
 }
console.log(countNegativeNumbers([-1, 5, -7, 2, -3, 8]))