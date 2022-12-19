//! ------------------------------ELEMENTI DAL DOM------------------------------------
const realGrid = document.getElementById("realGrid")
const button = document.getElementById("button")
//! ----------------------------------FUNZIONI----------------------------------------
//^ FUNZIONE 1 : "Formula Creazione Singola Cella"
function CellaFinita() {
    //* Creo e Inserisco la cella
    const div = document.createElement("button")
    const cella = realGrid.appendChild(div)
    //* Stilizzo la cella
    cella.classList.add("cell", "flex", "center", "styleFont")
    //* Estrapolo la cella finita
    return cella
}
//^ FUNZIONE 2 : "Genero un numero Random"
const unicoNumeroRandom = (min = 1, max = 100, blackList) => {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    } while (blackList.includes (randomNumber))
    return randomNumber;
}
//! ----------------------------LOGICA DI SVOLGIMENTO---------------------------------
//^ PASSAGGIO 1 : Al Click del bottone "Gioca" devo far comparire la Griglia : 
button.addEventListener("click", function () {
    //* Faccio comparire la griglia
    realGrid.classList.add("active")
})
//^ PASSAGGIO 2 : Apro un Ciclo per completare la Griglia e al Click della cella devo aumentare il punteggio : 
//* Preparo il mio contatore
let counter = 0
//* Apro il ciclo
for (let i = 1; i <= 100; i++) {
    //* Genero 100 celle
    const cellaUtilizzoUno = CellaFinita();
    //* Inserisco i numeri dentro le celle
    cellaUtilizzoUno.append(i)
    //* Coloro le Celle al Click & Le rendo inutilizzabili al secondo Click : 
    cellaUtilizzoUno.addEventListener("click", function () {
        console.log(i)
        if (cellaUtilizzoUno.classList.contains("azzurro")) {
            cellaUtilizzoUno.classList.remove("azzurro")
            cellaUtilizzoUno.disabled = true
        } else {
            cellaUtilizzoUno.classList.add("azzurro")
            cellaUtilizzoUno.disabled = true
        }
        //* Stampo in console il punteggio
        console.log(++counter)
    })
}
//^ PASSAGGIO 3 : Renderizzo le celle e genero 16 numeri random MAI uguali : 
//* Preparo l'Array che ospiterà i numeri usciti
const extractedNumber = [];
for (let i=1; i <= 16 ; i++ ) {
    //* Genero un numero random
    const cellNumber = unicoNumeroRandom (1, 100, extractedNumber)
    //* Aggiungo il numero uscito ai numeri usciti
    extractedNumber.push(cellNumber)
}
//* Vedo la mia blacklist di numeri estratti
console.log(extractedNumber)





