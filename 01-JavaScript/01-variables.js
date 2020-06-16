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
    mascotas: ['gato', 'perro', 'paloma']
}; // object

// Acceder a las propiedades del objecto
alex.nombre; // "Alex"
alex.apellido; // "Arevalo"
alex["nombre"]; //Alex

console.log(alex);
alex.nombre = "Marcelo";
console.log(alex);
alex["nombre"] = "Alex";
console.log(alex);

alex.sueldo = 1.2;
console.log(alex.sueldo); // 1.2


console.log(Object.values(alex)); //Solo iguala la llave a undefined
delete alex.nombre; //Elimina la llave nombre

// Clase Object
console.log(Object.values(alex));

//Lista de variables por valor en JS
//number
//string
//boolean
//undefined

let edadAlex = 22;
let edadMarcelo = edadAlex;

console.log(edadAlex); // 22
console.log(edadMarcelo); // 22

edadAlex = edadAlex + 1;
console.log(edadAlex); // 23
console.log(edadMarcelo); // 23

// Lista de variables por REFERENCIA en JS
let rafael = {
    nombre: "Rafael",
};
let lennin = Object.assign({}, rafael); // Creamos un objeto por valor con assing

console.log(rafael); // Rafael
console.log(lennin); // Rafael
lennin.nombre = "Lennin";
delete rafael.nombre;
console.log(rafael); // {}
console.log(lennin); // Lennin



/* const arregloNumeros = []; // object

console.log(alex);
console.log(arregloNumeros); */







