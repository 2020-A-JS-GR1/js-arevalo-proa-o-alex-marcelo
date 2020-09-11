import {Component, OnInit} from '@angular/core';
import {UsuarioServices} from "../../servicios/usuario.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {
  arregloUsuario = [];

  constructor(private readonly _usuarioService: UsuarioServices, private readonly _router: Router) {
  }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos.subscribe(
      (usuario: any[]) => {
        this.arregloUsuario = usuario;
      },
      (error) => {
        console.log(error);
      }
    )
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

}
