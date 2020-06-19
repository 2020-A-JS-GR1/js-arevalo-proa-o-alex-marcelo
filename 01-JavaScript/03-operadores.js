const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// Funciones como parametros
const respuestaFind = arreglo.find(function (valorActual, indiceActual, arregloActual) {
    console.log('valorActual', valorActual);
    console.log('indiceActual', indiceActual);
    console.log('arregloActual', arregloActual);
    return valorActual.nombre === "Cristian";
});

console.log(respuestaFind);

// FINDINDEX
// Funciones como parametros
const respuestaIndex = arreglo.findIndex(function (valorActual, indiceActual, arregloActual) {
    console.log('valorActual', valorActual);
    console.log('indiceActual', indiceActual);
    console.log('arregloActual', arregloActual);
    return valorActual.nombre === "Cristian";
});

console.log("respuestaIndex", respuestaIndex);

// FOREACH
// Funciones como parametros
const respuestaForEach = arreglo.forEach(function (valorActual, indiceActual, arregloActual) {
    console.log('valorActual', valorActual);
    console.log('indiceActual', indiceActual);
    console.log('arregloActual', arregloActual);
});

console.log("respuestaForEach", respuestaForEach);

// MAP
// Funciones como parametros
const respuestaMap = arreglo.map((valorActual, indiceActual, arregloActual) => {
    const nuevoElemento = {
        id: valorActual.id,
        nombre: valorActual.nombre,
        nota: valorActual.nota + 1
    };
    return nuevoElemento;
});

console.log("respuestaMap", respuestaMap);
console.log("arreglo",arreglo);

//MAP NUEVO
//Funciones como parametros
const respuestaMapNuevo = arreglo.map((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota;
});

console.log("respuestaMapNuevo", respuestaMapNuevo);
console.log("arreglo",arreglo);


//FILTER
//Devolver expresion TRUTY o FALSY
const respuestaFilter = arreglo.filter((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota >= 14;
});

console.log("respuestaMapNuevo", respuestaFilter);
// console.log("arreglo",arreglo);




