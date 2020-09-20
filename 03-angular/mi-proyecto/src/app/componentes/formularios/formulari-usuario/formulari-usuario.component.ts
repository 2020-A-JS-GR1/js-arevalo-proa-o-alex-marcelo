import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulari-usuario',
  templateUrl: './formulari-usuario.component.html',
  styleUrls: ['./formulari-usuario.component.css']
})
export class FormulariUsuarioComponent implements OnInit {
  @Input()
  nombreInput: string;
  @Input()
  cedulaInput: string;
  @Input()
  estadoCivilInput: string;
  @Output()
  informacionValida: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.nombreInput && this.cedulaInput && this.estadoCivilInput) {
      this.nombreModelo = this.nombreInput;
      this.cedulaModelo = this.cedulaInput;
      this.estadoCivilModelo = this.estadoCivilInput;
    }
  }

  crearUsuario(formulario) {
    const cedula = this.cedulaModelo;
    const isNumber = !isNaN(Number(cedula));
    if (isNumber) {
      this.informacionValida.emit({
        nombre: this.nombreModelo,
        cedula: this.cedulaModelo,
        estadoCivil: this.estadoCivilModelo
      });
    } else {
      console.log('No es un numero');
    }
  }

  ayuda() {
    alert('Ayuda');
  }
}
