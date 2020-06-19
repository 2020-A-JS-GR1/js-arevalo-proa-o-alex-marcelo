const arreglo = [6, 7, 8, 9, 10];
//arreglo = 12;
/* let cualquiercosa = "ASD";
cualquiercosa = 1;
cualquiercosa = true;
cualquiercosa = undefined;
cualquiercosa = null;
cualquiercosa = {};
cualquiercosa = [];
console.log(cualquiercosa); */
const arregloTodo = [
    true, 1, 1.2, "Alex", undefined, null, {}, [1, 2, true, "A"]
];

let a = [1, 2, 3];
const b = Object.assign([], a);

// for of
for (let numero of arreglo) {
    console.log('numero', numero); // VALORES
}

// for in
for (let numero in arreglo) {
    console.log('numero', numero); // INDICES
}

// arreglo =  [6, 7, 8, 9, 10];
arreglo.push(11); // Añade un elemento al final del arreglo
console.log(arreglo); // [6, 7, 8, 9, 10, 11]
arreglo.pop(); // Eliminar al fianl de un elemento
console.log(arreglo); // [6, 7, 8, 9, 10]
arreglo.unshift(5); // Añadir al principio del arreglo
console.log(arreglo); // [5, 6, 7, 8, 9, 10]

arreglo.splice(0,1); // Eliminar dentro del arreglo un elemento
console.log(arreglo); // [6, 7, 8, 9, 10]
arreglo.splice(0,0,3,4,5); // Añadir varios elememntos en un arregloS
console.log(arreglo); // [3, 4, 5, 6, 7, 8, 9, 10]

// Buscar Indice
const indice = arreglo.indexOf(9);
console.log('indice',indice); //6
//Eliminar el elemento por el indice
arreglo.splice(indice,1);
console.log('arreglo',arreglo);


