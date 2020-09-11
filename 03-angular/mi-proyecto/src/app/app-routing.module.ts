import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLogInComponent} from "./rutas/ruta-log-in/ruta-log-in.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, // COMPONENTE
    path: 'inicio' // URL
  },
  {
    component: RutaLogInComponent, // COMPONENTE
    path: 'login' // URL
  },
  {
    component: RutaUsuarioComponent, // COMPONENTE
    path: 'usuario', // URL
    children: [
      {
        path:'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path:'crear',
        component: RutaCrearUsuarioComponent
      },
      {
        path:'editar/:id',
        component: RutaEditarUsuarioComponent
      },
      {
        path:'',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
// {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
