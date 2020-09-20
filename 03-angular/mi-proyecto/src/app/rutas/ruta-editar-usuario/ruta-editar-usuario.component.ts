import {Component, OnInit} from '@angular/core';
import {UsuarioServices} from '../../servicios/usuario.services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;
  mostrarFormulario = false;

  constructor(private readonly _usuarioService: UsuarioServices, private readonly _activatedRoute: ActivatedRoute, private readonly _router: Router) {
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
            this.llenarFormularioConDatosUsuario();
          },
          (err) => {
            console.log(err)
          }
        )
      }
    )
  }

  llenarFormularioConDatosUsuario() {
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario) {
    const obsEditar = this._usuarioService.editar(usuario, this.usuario.id);
    obsEditar.subscribe(
      (datos) => {
        const url = ['/usuario', 'lista'];
        this._router.navigate(url);
      },
      (err) => {
        console.error(err);
      }
    )
  }

}
