import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductoServices} from '../../services/producto.services';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  productos;

  constructor(private readonly _router: Router, private _productoService: ProductoServices) {
  }

  ngOnInit(): void {
    if (window.location.pathname.includes('tiendados')) {
      this.productosFireBase(2);
    } else {
      this.productosFireBase(1);
    }
  }

  irAEditarProducto(id): void {
    if (window.location.pathname.includes('tiendados')) {
      const ruta = ['/tiendados', 'editarproducto', id]
      this._router.navigate(ruta);
    } else {
      const ruta = ['/tiendauno', 'editarproducto', id]
      this._router.navigate(ruta);
    }
  }

  async eliminarProducto(id) {
    try {
      await this._productoService.deleteProducto(id)
      const indice = this.productos.findIndex(u => u.id === id);
      this.productos.splice(indice, 1);
    } catch (e) {
      console.log(e);
    }
  }

  formatconservante(conservante) {
    return conservante === true ? 'si' : 'no';
  }

  productosFireBase(id: number) {
    this._productoService.traerTodosProductos(id).subscribe(
      (dataprod) => {
        const fireproducts: [] = [];
        dataprod.forEach(function (doc) {
          // @ts-ignore
          fireproducts.push(doc);
        });
        this.productos = fireproducts;
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
