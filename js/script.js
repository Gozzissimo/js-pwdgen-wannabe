// Descrizione esercizio:
// Chiedi all’utente il suo nome,
//     poi chiedi il suo cognome,
//         poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// variabili
let firstName = prompt('Inserisci il tuo Nome');
let lastName = prompt('Inserisci il tuo Cognome');
let favColor = prompt('Inserisci il tuo Colore preferito');
let favNumber = prompt('Inserisci il tuo Numero preferito');

// password risultato
let password = (firstName + lastName + favColor + (parseInt(favNumber) + 21));

console.log(password);

// html write
document.writeln('Congratulazioni, la tua password è '+ password);