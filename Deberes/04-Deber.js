const inquirer = require('../01-JavaScript/node_modules/inquirer');
const fs = require('fs');

const tiendas = [
    'Tienda Veci 1',
    'Tienda Veci 2',
    'Salir'
];

const opciones = [
    'Ver productos',
    'Crear producto',
    'Actualizar producto',
    'Eliminar producto',
    'Salir'
];

function leerArchivo(tienda) {

    const resultado = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.readFile( // ASINCRONA
                tienda === tiendas[0] ? './tienda1.txt' : './tienda2.txt', 'utf-8',
                (error, contenido) => { // CALLBACK
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

function escribirArchivo(tienda, contenido) {

    const resultado = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.writeFile(tienda === tiendas[0] ? './tienda1.txt' : './tienda2.txt', contenido, 'utf-8',
                (error) => { // CALLBACK
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

async function verProductos(tienda) {
    try {
        const productos = await leerArchivo(tienda);
        console.log('\n');
        console.table(JSON.parse(productos));
        console.log('\n\n\n\n');
    } catch (e) {
        console.log(e);
    }
}

async function crearProducto(tienda) {
    try {
        const productos = await leerArchivo(tienda);
        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese nombre del producto>'
            },
            {
                type: 'number',
                name: 'cantidad',
                message: 'Ingrese cantidad del producto>'
            },
            {
                type: 'number',
                name: 'precio',
                message: 'Ingrese precio del producto>'
            },
            {
                type: 'list',
                name: 'conservantes',
                message: 'Tiene conservantes?>',
                choices: ['SI', 'NO']
            },
        ]);
        respuesta.conservantes === 'SI' ? respuesta.conservantes = true : respuesta.conservantes = false;

        const nuevosProductos = JSON.parse(productos);
        nuevosProductos.push(respuesta);

        await escribirArchivo(tienda, JSON.stringify(nuevosProductos));
        verProductos(tienda);
    } catch (e) {
        console.log(e);
    }
}


function crud(tienda) {
    inquirer.prompt([{
        type: 'list',
        name: 'opcion',
        message: 'Por favor, elija una opción ?',
        choices: opciones
    }]).then((res) => {
        if (res.opcion !== opciones[4]) {
            switch (String(res.opcion)) {
                case opciones[0]:
                    verProductos(tienda);
                    break;
                case opciones[1]:
                    crearProducto(tienda);
                    break;
                case opciones[2]:
                    console.log('Actualizar');
                    break;
                case opciones[3]:
                    console.log('Eliminar');
                    break;
                default:
                    console.log('Ver');
                    break;
            }
        } else {
            main();
        }
    });
}

function main() {
    inquirer.prompt({
        type: 'list',
        name: 'tienda',
        message: 'Por favor, elija una tienda ?',
        choices: tiendas,
    },).then((res) => {
        if (res.tienda !== tiendas[2]) {
            crud(res.tienda);
        } else {
            console.log('Gracias');
        }
    });
}

main();