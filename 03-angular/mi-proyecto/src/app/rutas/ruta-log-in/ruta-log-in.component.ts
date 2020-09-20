import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/auth/auth.service';

@Component({
  selector: 'app-ruta-log-in',
  templateUrl: './ruta-log-in.component.html',
  styleUrls: ['./ruta-log-in.component.css']
})
export class RutaLogInComponent implements OnInit {
  correoModelo: string;
  cedulaModelo: string;

  constructor(public readonly _authService: AuthService) {
  }

  ngOnInit(): void {
  }

  revisarLogIn(formulario) {
    const obsAuth = this._authService.logIn(this.correoModelo, this.cedulaModelo);
    obsAuth.subscribe(
      (arregloUsuario: any[]) => {
        if (arregloUsuario.length > 0) {
          this._authService.estaAutenticado = true;
        } else {
          this._authService.estaAutenticado = false;
        }
      },
      (err) => {
        console.error(err);
      }
    )
  }

}
