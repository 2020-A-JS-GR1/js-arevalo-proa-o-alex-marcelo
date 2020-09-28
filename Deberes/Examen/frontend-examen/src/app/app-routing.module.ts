import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Tienda1Component} from './routes/tienda1/tienda1.component';
import {Tienda2Component} from './routes/tienda2/tienda2.component';
import {RutaEditarProductoComponent} from './routes/ruta-editar-producto/ruta-editar-producto.component';
import {RutaCrearProductoComponent} from './routes/ruta-crear-producto/ruta-crear-producto.component';
import {RutaListaProductoComponent} from './routes/ruta-lista-producto/ruta-lista-producto.component';

const routes: Routes = [
  {
    component: Tienda1Component,
    path: 'tiendauno',
    children: [
      {
        path: 'listaproductos',
        component: RutaListaProductoComponent,
      },
      {
        path: 'crearproducto',
        component: RutaCrearProductoComponent,
      },
      {
        path: 'editarproducto/:id',
        component: RutaEditarProductoComponent
      },
      {
        path: '',
        redirectTo: 'listaproductos',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: Tienda2Component,
    path: 'tiendados',
    children: [
      {
        path: 'listaproductos',
        component: RutaListaProductoComponent,
      },
      {
        path: 'crearproducto',
        component: RutaCrearProductoComponent,
      },
      {
        path: 'editarproducto/:id',
        component: RutaEditarProductoComponent
      },
      {
        path: '',
        redirectTo: 'listaproductos',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
