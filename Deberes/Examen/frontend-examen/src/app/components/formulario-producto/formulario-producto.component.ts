import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  @Input()
  nombreInput: string;
  @Input()
  cantidadInput: number;
  @Input()
  precioInput: number;
  @Input()
  conservanteInput: string;
  @Output()
  informacionValida: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string;
  cantidadModelo: number;
  precioModelo: number;
  conservanteModelo: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.nombreInput && this.cantidadInput && this.precioInput) {
      this.nombreModelo = this.nombreInput;
      this.cantidadModelo = this.cantidadInput;
      this.precioModelo = this.precioInput;
      this.conservanteModelo = this.conservanteInput;
    }
  }

  crearProducto(formulario) {
    const isNumberCantidad = !isNaN(Number(this.cantidadModelo));
    const isNumberPrecio = !isNaN(Number(this.precioModelo));

    if (isNumberCantidad && isNumberPrecio) {
      this.informacionValida.emit({
        nombre: this.nombreModelo,
        cantidad: this.cantidadModelo,
        precio: this.precioModelo,
        conservante: this.formatConservante(this.conservanteModelo),
        id_tienda: this.getIdTienda()
      });
    } else {
      console.log('No es un numero');
    }
  }

  getIdTienda() {
    if (window.location.pathname.includes('tiendados')) {
      return 2;
    } else {
      const ruta = ['/tiendauno', 'crearproducto']
      return 1;
    }
  }

  formatConservante(conservante) {
    return conservante === 'true';
  }

}
