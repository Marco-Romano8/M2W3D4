// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function modTitolo() {
    let titolo = document.getElementById("titolo")
    titolo.innerText = prompt("Titolo Nuovo:")
    console.log(titolo.innerText)
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBack(versione) {
    switch (versione) {
        case "dark":
            cssVersion = "dark.css"
        break
        default:
            cssVersion = "style.css"
    }
    let tagLink = document.querySelector("link")
    tagLink.href = cssVersion
}
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeLink() {
    let link = document.getElementById("link")
    link.innerText = "Via Tutte Le Strade Portano A Roma "
    console.log(link.innerText)
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function newCss() {
    let link = document.querySelectorAll("a")

    for(let change of link) {
        change.classList.add("classCSS")
    }
    console.log(link)
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function hiddenImg() {
    let hidden = document.querySelectorAll("img")
    hidden.forEach((immagine) => {
        immagine.classList.toggle("classImg")
    })
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function getRandomColor () {
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function changeColor() {
    let randomColor = getRandomColor()
    let price = document.querySelectorAll(".price")
    for (let i = 0; i < price.length; i++) {
        let singlePrice = price[i]
        singlePrice.style.color = randomColor
    }
}

