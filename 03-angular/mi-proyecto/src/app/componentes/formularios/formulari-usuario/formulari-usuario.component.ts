import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulari-usuario',
  templateUrl: './formulari-usuario.component.html',
  styleUrls: ['./formulari-usuario.component.css']
})
export class FormulariUsuarioComponent implements OnInit {

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  crearUsuario(formulario) {
    const cedula = this.cedulaModelo;
    const isNumber = !isNaN(Number(cedula));
    if (isNumber) {
      console.log('Enviado al servidor');
    } else {
      console.log('No es un numero');
    }
  }

  ayuda() {
    alert('Ayuda');
  }
}
