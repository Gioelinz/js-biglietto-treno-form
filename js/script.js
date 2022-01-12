/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Value
const userName = document.getElementById("name-surname").value;
const kilometers = document.getElementById("kms").value;
const age = document.getElementById("age").value;

// stampare nel dom

const elementName = document.getElementById("elementname");
const elementKm = document.getElementById("elementkms");
const elementAge = document.getElementById("elementage");

console.log(userName)
console.log(kilometers)
console.log(age)

// ! calcolo sconto e preezzo

let finalKmPrice = kilometers * 0.21;

finalKmPrice = finalKmPrice.toFixed(2);

console.log(finalKmPrice)

let off20 = finalKmPrice - finalKmPrice * 20 / 100;
off20 = off20.toFixed(2);
console.log('off20: ', off20);


let off40 = finalKmPrice - finalKmPrice * 40 / 100;
off40 = off40.toFixed(2);
console.log('off40: ', off40);

// !