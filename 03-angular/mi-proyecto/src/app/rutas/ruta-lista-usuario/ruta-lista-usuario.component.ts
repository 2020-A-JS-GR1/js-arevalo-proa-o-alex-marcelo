import {Component, OnInit} from '@angular/core';
import {UsuarioServices} from '../../servicios/usuario.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {
  arregloUsuario = [];
  busquedaModelo = '';


  constructor(private readonly _usuarioService: UsuarioServices, private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  irAEditarUsuario(id: number) {
    const ruta = ['/usuario', 'editar', id]
    this._router.navigate(ruta);
    // /usuario/editar/1
  }

  eliminarUsuario(id: number) {
    const obsEliminar = this._usuarioService.eliminar(id);
    obsEliminar.subscribe(
      () => {
        // Eliminando de la interfaz
        const indice = this.arregloUsuario.findIndex(u => u.id === id);
        this.arregloUsuario.splice(indice, 1);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  filtrarArreglo() {
    const consulta = {
      or: [
        {
          nombre: {
            contains: this.busquedaModelo
          }
        },
        {
          cedula: {
            contains: this.busquedaModelo
          }
        },
      ]
    };
    const consultaString = 'where=' + JSON.stringify(consulta);
    const observableTraerTodos = this._usuarioService.
    traerTodos(this.busquedaModelo != '' ? consultaString : '');
    observableTraerTodos.subscribe(
      (usuario: any[]) => {
        this.arregloUsuario = usuario;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
