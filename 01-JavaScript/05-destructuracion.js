const alex = {
    nombre: "Alex",
};

const carolina = {
    apellido: "Arevalo"
};

const alexCarolina = {
    ...alex, ...carolina
};

alexCarolina.nombre = 'Carolina';

console.log(alex);
console.log(alexCarolina);

const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [6, 7, 8, 9, 10];

const superArreglo = [...arreglo1, ...arreglo2];
console.log('superArreglo', superArreglo);
