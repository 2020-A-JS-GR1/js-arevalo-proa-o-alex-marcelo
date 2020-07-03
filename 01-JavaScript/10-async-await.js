const promesasLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

// ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {
    console.log('1');
    try {
        const contenidoArchivoActual = await promesasLeerArchivo();
        await promesaEscribirArchivo();
        const nuevoContenido = await promesasLeerArchivo();
        console.log(nuevoContenido);
    } catch (e) {
        console.log(e);
    }

}
