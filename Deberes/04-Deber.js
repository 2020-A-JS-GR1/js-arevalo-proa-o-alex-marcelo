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
    'Tiendas'
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
        console.log('\n\n\n');
        return productos;
    } catch (e) {
        console.log(e);
    }
}

async function crearProducto(tienda) {
    try {
        const productos = await leerArchivo(tienda);
        const nuevosProductos = JSON.parse(productos);

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
        nuevosProductos.push(respuesta);

        await escribirArchivo(tienda, JSON.stringify(nuevosProductos));
        await verProductos(tienda);
        console.log('Producto creado exitosamente!!!');
    } catch (e) {
        console.log(e);
    }
}

async function eliminarProducto(tienda) {
    try {
        let productos = await verProductos(tienda);
        productos = JSON.parse(productos);

        const respuesta = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese nombre del producto que desea eliminar>'
            }
        ]);

        const indice = productos.findIndex((producto) => producto.nombre === respuesta.nombre);

        if (indice !== -1) {
            productos.splice(indice, 1);
            await escribirArchivo(tienda, JSON.stringify(productos));
            await verProductos(tienda);
            console.log('Producto eliminado exitosamente!!!');
        } else {
            console.log('No se ha podido encontrar el producto> ' + respuesta.nombre);
        }
    } catch (e) {
        console.log(e);
    }
}

async function actualizarProducto(tienda) {
    try {
        let productos = await verProductos(tienda);
        productos = JSON.parse(productos);

        const resNombre = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese nombre del producto que desea actualizar>'
            }
        ]);

        const productoAc = productos.find((producto) => producto.nombre === resNombre.nombre);
        const indice = productos.findIndex((producto) => producto.nombre === resNombre.nombre);

        if (productoAc) {
            const respuesta = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese nombre del producto>',
                    default: function () {
                        return productoAc.nombre;
                    },
                },
                {
                    type: 'number',
                    name: 'cantidad',
                    message: 'Ingrese cantidad del producto>',
                    default: function () {
                        return productoAc.cantidad;
                    },
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingrese precio del producto>',
                    default: function () {
                        return productoAc.precio;
                    },
                },
                {
                    type: 'list',
                    name: 'conservantes',
                    message: 'Tiene conservantes?>',
                    choices: ['SI', 'NO'],
                    default: function () {
                        return productoAc.conservantes === true ? 'SI' : 'NO'
                    }
                },
            ]);

            respuesta.conservantes === 'SI' ? respuesta.conservantes = true : respuesta.conservantes = false;
            productos[indice] = respuesta;

            await escribirArchivo(tienda, JSON.stringify(productos));
            await verProductos(tienda);
            console.log('Producto actualizado exitosamente!!!');
        } else {
            console.log('No se ha podido encontrar el producto> ' + resNombre.nombre)
        }
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
                    verProductos(tienda).then(() => {
                        crud(tienda)
                    });
                    break;
                case opciones[1]:
                    crearProducto(tienda).then(() => {
                        crud(tienda)
                    });
                    break;
                case opciones[2]:
                    actualizarProducto(tienda).then(() => {
                        crud(tienda);
                    })
                    break;
                case opciones[3]:
                    eliminarProducto(tienda).then(() => {
                        crud(tienda)
                    })
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