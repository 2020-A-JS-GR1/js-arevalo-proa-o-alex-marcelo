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
const vocales = ['a', 'e', 'i', 'o', 'u'];
let numeroVocales = 0;
let numeroConsonantes = 0;

const aprobados = arreglo.map((valorActual) => {

    for (let letra of valorActual.nombre) {
        vocales.forEach((vocal) => {
            if (letra.toLowerCase() === vocal) {
                numeroVocales++;
            }
        });
    }

    numeroConsonantes = Math.abs(valorActual.nombre.length - numeroVocales);
    valorActual.nota = valorActual.nota + (0.1 * numeroVocales);
    valorActual.nota = valorActual.nota + (0.05 * numeroConsonantes);

    numeroVocales = 0;
    numeroConsonantes = 0;

    return valorActual;
}).filter(estudiantes => estudiantes.nota > 14);

console.log(aprobados);


