/* 
1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso
e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
3) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
4) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/
//* MILESTONE 1
/* Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.*/
//*MILESTONE 2
/* Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti */
//* MILESTONE 3
/* Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, 
controllando se il numero di cella è presente nell'array di bombe. 
Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) 
altrimenti diventa azzurra e dobbiamo incrementare il punteggio. */
//* MILESTONE 4
/* Quando l'utente clicca su una cella, e questa non è una bomba, 
dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. 
Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato. */
//* MILESTONE 5
/* Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. 
Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta. */
//! ---------------------------------------SVOLGIMENTO js-campominato-grid-----------------------------------------
const realGrid = document.getElementById("realGrid")
//^ --------------DIFFICOLTA' 1-------------------
const button = document.getElementById("button")
button.addEventListener("click", function () {
    realGrid.classList.add("active")
    difficileDue.classList.remove("active")
    difficileTre.classList.remove("active")
}
)
for (i = 1; i <= 100; i++) {
    const realGridChild = document.createElement("div")
    realGridChild.classList.add("cell", "flex", "center", "styleCell")
    const finalGenerate = realGrid.appendChild(realGridChild)
    finalGenerate.innerText = i;
    finalGenerate.addEventListener("click", function () {
        if (realGridChild.classList.contains("azzurro")) {
            realGridChild.classList.remove("azzurro")
        } else {
            realGridChild.classList.add("azzurro")
        }
        console.log(finalGenerate.innerText)
    })
}
//^ --------------DIFFICOLTA' 2-------------------
const buttonDue = document.getElementById("buttonDue")
const difficileDue = document.getElementById("difficileDue")
buttonDue.addEventListener("click", function () {
    difficileDue.classList.add("active")
    realGrid.classList.remove("active")
    difficileTre.classList.remove("active")
}
)
for (i = 1; i <= 81; i++) {
    const realGridDue = document.createElement("div")
    realGridDue.classList.add("realGridDue", "flex", "center", "styleCell")
    const finalGenerateDue = difficileDue.appendChild(realGridDue)
    finalGenerateDue.innerText = i;
    finalGenerateDue.addEventListener("click", function () {
        if (realGridDue.classList.contains("azzurro")) {
            realGridDue.classList.remove("azzurro")
        } else {
            realGridDue.classList.add("azzurro")
        }
        console.log(finalGenerateDue.innerText)
    })
}
//^ --------------DIFFICOLTA' 3--------------------
const buttonTre = document.getElementById("buttonTre")
const difficileTre = document.getElementById("difficileTre")
buttonTre.addEventListener("click", function () {
    difficileTre.classList.add("active")
    realGrid.classList.remove("active")
    difficileDue.classList.remove("active")
}
)
for (i = 1; i <= 49; i++) {
    const realGridTre = document.createElement("div")
    realGridTre.classList.add("realGridTre", "flex", "center", "styleCell")
    const finalGenerateTre = difficileTre.appendChild(realGridTre)
    finalGenerateTre.innerText = i;
    finalGenerateTre.addEventListener("click", function () {
        if (realGridTre.classList.contains("azzurro")) {
            realGridTre.classList.remove("azzurro")
        } else {
            realGridTre.classList.add("azzurro")
        }
        console.log(finalGenerateTre.innerText)
    })
}
//! ---------------------------------------SVOLGIMENTO js-campominato-dom-----------------------------------------


