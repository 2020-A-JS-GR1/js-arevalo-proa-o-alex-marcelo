const promesasLeerArchivo = () => {
    return new Promise((res, rec) => {
        //res('contenido leer archivo')
        rec('Errorc')
    });
}
const promesaEscribirArchivo = () => {
    return new Promise((res, rec) => {
        res('contenido escribir archivo')
    });
}

// ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {
    console.log('1');
    try {
        console.log('2');
        const contenidoArchivoActual = await promesasLeerArchivo();
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesasLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (e) {
        console.log(e);
    }
    console.log('6');
    console.log('7');
}

const respuestaEjercicio = ejercicio();
console.log('respuesta ejercicio', respuestaEjercicio);
console.log('promesasLeerArchivo',promesasLeerArchivo());
console.log('promesaEscribirArchivo', promesaEscribirArchivo())
