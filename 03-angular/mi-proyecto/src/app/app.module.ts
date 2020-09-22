import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartaPeliculaComponent} from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioServices} from './servicios/usuario.services';
import {RutaLogInComponent} from './rutas/ruta-log-in/ruta-log-in.component';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaDetalleUsuarioComponent} from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import {RutaUsuarioComponent} from './rutas/ruta-usuario/ruta-usuario.component';
import {RutaListaUsuarioComponent} from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import {RutaCrearUsuarioComponent} from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import {RutaEditarUsuarioComponent} from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import {FormulariUsuarioComponent} from './componentes/formularios/formulari-usuario/formulari-usuario.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './servicios/auth/auth.service';
import {EstaLogeadoGuard} from './servicios/guard/esta-logeado.guard';
import {EsSupervisorGuard} from './servicios/guard/es-supervisor.guard';
import {EsAdministradorGuard} from './servicios/guard/es-administrador.guard';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent,
    RutaLogInComponent,
    RutaInicioComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormulariUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // -> Importa el http client
    FormsModule, // -> Permite la funcionalidad de los formularios de templates
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    ButtonModule
  ],
  providers: [
    UsuarioServices,
    AuthService,
    EstaLogeadoGuard,
    EsSupervisorGuard,
    EsAdministradorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
