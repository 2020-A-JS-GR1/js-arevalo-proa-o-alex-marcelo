import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoServices} from '../../services/producto.services';

@Component({
  selector: 'app-ruta-editar-producto',
  templateUrl: './ruta-editar-producto.component.html',
  styleUrls: ['./ruta-editar-producto.component.css']
})
export class RutaEditarProductoComponent implements OnInit {
  producto;
  mostrarFormulario = false;
  idProducto;

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute, private readonly _productoService: ProductoServices) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros) => {
        const obsUsuario = this._productoService.trearUnProductoPorId(parametros.id);
        this.idProducto = parametros.id;
        obsUsuario.subscribe(
          (producto: any) => {
            this.producto = producto;
            this.llenarFormularioConDatosUsuario();
          },
          (err) => {
            console.log(err)
          }
        )
      }
    )
  }

  async editarProducto(producto) {
    try {
      await this._productoService.updateProducto(producto, this.idProducto);
      this.navigateLista()
    } catch (e) {
      console.log(e);
    }
  }

  llenarFormularioConDatosUsuario() {
    this.mostrarFormulario = true;
  }

  navigateLista() {
    if (window.location.pathname.includes('tiendados')) {
      const ruta = ['/tiendados', 'listaproductos']
      this._router.navigate(ruta);
    } else {
      const ruta = ['/tiendauno', 'listaproductos']
      this._router.navigate(ruta);
    }
  }
}
