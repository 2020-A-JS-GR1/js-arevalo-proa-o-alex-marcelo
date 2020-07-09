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
                        resolve("Exitoso");
                    }
                }
            );
        }
    );

    return resultado;
}

async function editarArchivo(path, contenidoNuevo) {
    try {
        let contenido = await leerArchivo(path);
        const res = await escribirArchivo(path, contenido, contenidoNuevo);
        console.log(res);
        contenido = await leerArchivo(path);
        console.log(contenido);
    } catch (e) {
        console.error('Contenido catch error', e);
    }
}

editarArchivo('../01-JavaScript/06-ejemplo.txt', 'Buenas Noches');
