// Numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    let message;

    // Stampo il numero o la stringa corretta
    // se è divisibile per 3 e 5 stampo FizzBuzz
    // se è divisibile per  5 stampo Buzz
    // se è divisile per 3 stampo Fizz
    // altrimenti stampo solo il numero
    if(i % 3 === 0 && i % 5 === 0) {
        message = 'FizzBuzz';
    } else if(i % 5 === 0) {
        message = 'Buzz';
    } else if (i % 3 === 0) {
        message = 'Fizz';
    } else {
        message = i;
    }
     
    console.log(message);
}