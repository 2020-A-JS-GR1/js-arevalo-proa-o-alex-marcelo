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
console.log("arreglo", arreglo);

//MAP NUEVO
//Funciones como parametros
const respuestaMapNuevo = arreglo.map((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota;
});

console.log("respuestaMapNuevo", respuestaMapNuevo);
console.log("arreglo", arreglo);


//FILTER
//Devolver expresion TRUTY o FALSY
const respuestaFilter = arreglo.filter((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota >= 14;
});

console.log("respuestaMapNuevo", respuestaFilter);
// console.log("arreglo",arreglo);

// Hay alguna nota menor a 9? SI o NO
// Devuelve un Booleano
const respuestaSome = arreglo.some((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota < 4;
});

console.log("respuestaSome", respuestaSome); // True

// EVERY -> expresion
// Todas las notas son mayores a 14? SI o NO
// Devuelve un Booleano
const respuestaEvery = arreglo.every((valorActual, indiceActual, arregloActual) => {
    return valorActual.nota > 14;
});

console.log("respuestaEvery", respuestaEvery); // False

// [1,2,3,4,5,4,3,2,1]
// reduce izq -> der
// reduceRight der -> izq

const respuestaReduce = arreglo.reduce((valorAcumulado, valorActual, indice, arreglo) => {
    return valorAcumulado - valorActual.nota
}, 500);

console.log("respuestaReduce", respuestaReduce); //146

const resultadoMenoresANueve = arreglo
    .map((v) => v.nota * 1.3) // añadiendo el 30%
    .filter((nota) => nota < 9); // Busco a los < 9
const totalPuntosEstudiantes = resultadoMenoresANueve
    .reduce((acumulado, actual) => acumulado + actual,0); //Total
const notaPromedio = totalPuntosEstudiantes / resultadoMenoresANueve.length;
console.log("notaPromedio", notaPromedio); // 6.5
