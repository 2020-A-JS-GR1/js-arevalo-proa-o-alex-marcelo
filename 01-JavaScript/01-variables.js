// Variables Mutables e Inmutables

// Variables Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Variables Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";

// Tipos de Variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Alex"; // string
const booleanoo = false; // boolean
const hijos = null; // object
const zapatos = undefined; //undefined
const apellido = 'Arevalo';

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanoo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);

if (true == true) {
    console.log('Es Truty'); // Truty
} else {
    console.log('Es Falsy');
}

if ("Alex") {
    console.log('Es Truty'); // Truty
} else {
    console.log('Es Falsy');
}

if (-1) {
    console.log('Es Truty'); // Truty
} else {
    console.log('Es Falsy');
}

if (0) {
    console.log('Es Truty');
} else {
    console.log('Es Falsy'); // Falsy
}

if (1) {
    console.log('Es Truty'); // Truty
} else {
    console.log('Es Falsy');
}

if (null) {
    console.log('Es Truty');
} else {
    console.log('Es Falsy'); // Falsy
}

if (undefined) {
    console.log('Es Truty');
} else {
    console.log('Es Falsy'); // Falsy
}

// Objectos Js (JSON) - Arreglos

const alex = {
    nombre: "Alex", // llave: valor
    'apellido': 'Arevalo',
    edad: 31,
    hijos: null,
    zapatos: undefined,
    ropa: {
        color: 'azul',
        talla: 40
    },
    mascotas: ['gato','perro','paloma']
}; // object

// Acceder a los objecto
alex.nombre; // "Alex"
alex.apellido; // "Alex"

const arregloNumeros = []; // object

console.log(alex);
console.log(arregloNumeros);







