const fs = require('fs');

function leerArchivo(path) {

    const resultado = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.readFile( // ASINCRONA
                path, 'utf-8', (error, contenido) => { // CALLBACK
                    if (error) {
                        resolve(error);
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
    return resultado;
}

function escribirArchivo(path, contenido, contenidoNuevo) {

    const resultado = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.writeFile(path, contenido + '\n' + contenidoNuevo, 'utf-8', (error) => { // CALLBACK
                    if (error) {
                        resolve(error);
                    } else {
                        throw new Error('hello');
                        resolve("Exitoso");
                    }
                }
            );
        }
    );

    return resultado;
}

leerArchivo('./01-JavaScript/06-ejemplo.txt').then((contenido) => {
    return escribirArchivo('./01-JavaScript/06-ejemplo.txt', contenido, 'Buenas Noches')
}).then((res) => {
    console.log(res);
    return leerArchivo('./01-JavaScript/06-ejemplo.txt')
}).then((contenido) => {
    console.log(contenido);
}).catch( // catch
    (error) => {
        console.error('Contenido catch error', error);
    }
);
