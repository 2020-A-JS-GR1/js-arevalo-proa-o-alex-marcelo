const fs = require('fs');

/*
* Hacer una funcion que acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido del archivo.
* La funcion debe tomar estos dos parametros y leer el archivo y agregar el texto al final del archivo
* */

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile( // ASINCRONA
        path, 'utf-8', (error, contenido) => { // CALLBACK
            if (error) {
                console.log('Hubo error', error);
            } else {
                fs.writeFile( // ASINCRONA
                    path, contenido + '\n' + contenidoNuevo, 'utf-8', (error) => { // CALLBACK
                        if (error) {
                            console.log('Hubo error', error);
                        } else {
                            fs.writeFile( // ASINCRONA
                                path, contenido + '\n' + contenidoNuevo, 'utf-8', (error) => { // CALLBACK
                                    if (error) {
                                        console.log('Hubo error', error);
                                    } else {

                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
}

escribirArchivo('./01-JavaScript/06-ejemplo.txt', 'Buenas Noches');
