import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductoServices} from '../../services/producto.services';

@Component({
  selector: 'app-ruta-crear-producto',
  templateUrl: './ruta-crear-producto.component.html',
  styleUrls: ['./ruta-crear-producto.component.css']
})
export class RutaCrearProductoComponent implements OnInit {

  constructor(private readonly _productoService: ProductoServices, private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  async crearProducto(usuario) {
    try {
      await this._productoService.crearProducto(usuario);
      this.navigateLista();
    } catch (e) {
      console.log(e);
    }
  }

  navigateLista(){
    if (window.location.pathname.includes('tiendados')) {
      const ruta = ['/tiendados', 'listaproductos']
      this._router.navigate(ruta);
    } else {
      const ruta = ['/tiendauno', 'listaproductos']
      this._router.navigate(ruta);
    }
  }

}
