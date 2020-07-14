const alex = {
    nombre: 'Alex',
    apellido: 'Arevalo',
    casado: false,
    estado: 'AC',
    sueldo: 20,
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto) => {
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
};
