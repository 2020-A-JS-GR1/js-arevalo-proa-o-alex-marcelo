interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const alex: Usuario = {
    nombre: 'Alex',
    apellido: 'Arevalo',
    casado: false,
    estado: 'AC',
    sueldo: 20,
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto: number) => {
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
            default:
                return 'AP';
        }
    }
}
