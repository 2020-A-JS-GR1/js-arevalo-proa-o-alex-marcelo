import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductoServices} from '../../services/producto.services';

@Component({
  selector: 'app-ruta-lista-producto',
  templateUrl: './ruta-lista-producto.component.html',
  styleUrls: ['./ruta-lista-producto.component.css']
})
export class RutaListaProductoComponent implements OnInit {

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  irNuevoProducto() {
    if (window.location.pathname.includes('tiendados')) {
      const ruta = ['/tiendados', 'crearproducto']
      this._router.navigate(ruta);
    } else {
      const ruta = ['/tiendauno', 'crearproducto']
      this._router.navigate(ruta);
    }
  }

}
