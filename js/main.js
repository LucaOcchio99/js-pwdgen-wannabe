// Password generator:


// - chiedi all’utente il suo nome,
const nome_utente = prompt('Qual è il tuo nome?');
console.log(nome_utente);

// - poi chiedi il suo cognome,
const cognome_utente = prompt('Qual è il tuo cognome?');
console.log(cognome_utente);

//  - poi chiedi il suo colore preferito
const colore_preferito = prompt('Qual è il tuo colore preferito?')
console.log(colore_preferito);

// - infine scrivi sulla pagina i dati ricevuti nel 
//  formato: nomecognomecolorepreferito21 
// 1 seleziono l'html
// 2 inserisco il contenuto

document.getElementById('password_generata').innerHTML = `L\' insicurissima password generata è la seguente: ${nome_utente}${cognome_utente}${colore_preferito}21`