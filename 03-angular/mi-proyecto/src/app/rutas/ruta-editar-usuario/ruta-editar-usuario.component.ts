import {Component, OnInit} from '@angular/core';
import {UsuarioServices} from "../../servicios/usuario.services";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;

  constructor(private readonly _usuarioService: UsuarioServices, private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros) => {
        const id = Number(parametros.id);
        const obsUsuario = this._usuarioService.obtenerUnoPorId(id);

        obsUsuario.subscribe(
          (usuario: any) => {
            this.usuario = usuario;
          },
          (err) => {
            console.log(err)
          }
        )
      }
    )
  }

}
