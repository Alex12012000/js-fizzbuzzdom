const container = document.getElementById('container');

// Numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    let message;
    let colorClass;
    
    // Stampo il numero o la stringa corretta
    // se è divisibile per 3 e 5 stampo FizzBuzz
    // se è divisibile per  5 stampo Buzz
    // se è divisile per 3 stampo Fizz
    // altrimenti stampo solo il numero
    if(i % 3 === 0 && i % 5 === 0) {
        message = 'fizzbuzz';
        colorClass = 'fizzbuzz';
    } else if(i % 5 === 0) {
        message = 'buzz';
        colorClass = 'buzz';
    } else if (i % 3 === 0) {
        message = 'fizz';
        colorClass = 'fizz';
    } else {
        message = i;
        colorClass = '';
    }

    // Nuovo quadrato
    const newSquare = `<div class="square ${colorClass}"> ${message} </div>`;
    // Quadrato nel container
    container.innerHTML += newSquare;
}