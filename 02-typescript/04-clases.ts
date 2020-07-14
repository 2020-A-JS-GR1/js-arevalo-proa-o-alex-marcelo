class Persona {
    public nombre: string;
    public apellido: string;
    static nombreYApellido: string = 'Humano';
    protected nombreYApellido: string = '';

    constructor(nombreParametro: string, apellidoParametro: string) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido
    }

    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro,
        apellidoParametro,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const alex = new Usuario(
    'Alex',
    'Arevalo',
    '1232454356',
    'soltero'
);

console.log(alex.nombre);
console.log(alex.apellido);
console.log(alex.cedula);
console.log(alex.estadoCivil);