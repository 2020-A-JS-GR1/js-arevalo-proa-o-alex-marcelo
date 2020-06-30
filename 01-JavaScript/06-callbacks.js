const fs = require('fs');

console.log('Primero'); // SINCRONA

fs.readFile( // ASINCRONA
    './01-JavaScript/06-ejemplo.txt', 'utf-8', (error, contenido) => { // CALLBACK

        console.log('Segundo');
        if (error) {
            console.log('Hubo error', error);
        } else {
            console.log(contenido);
        }
    }
);

console.log('Tercero');
