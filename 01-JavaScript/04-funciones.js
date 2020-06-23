function solonumeros(a, b, c) {
    return a - b + c;
}

solonumeros('v', true, [1, 2, 3]);
solonumeros();

function soloLetras(a, b, c) {
    console.log(a, b, c);
}

// Funciones nombradas
function funcionNombrada() {
}

funcionNombrada();
const funcionNombrada2 = function () {
}; // Funciones anonimas o funciones sin nombre
var funcionNombrada3 = function () {
};
let funcionNombrada4 = function opcional() {
};

funcionNombrada2();
funcionNombrada3();
funcionNombrada4();
// opcional() NO EXISTE

const funcionNombrada5 = () => {
}; // FAT ARROW FUNCTION
const funcionNombrada6 = (x) => {
    return x + 1;
}; // FAT ARROW FUNCTION
const funcionNombrada7 = x => x + 1;
// FAT ARROW FUNCTION
const funcionNombrada8 = (x,y,z) => x + y + z;

function sumarNumeros(numeroInicial, // Number
                      ...otrosNumeros) { //Parametros infinitos []
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}

const res = sumarNumeros(1,2,3,4,5,6,7,8,9,10);
console.log(res); //55
