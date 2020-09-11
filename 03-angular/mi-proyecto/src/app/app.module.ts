import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioServices} from "./servicios/usuario.services";
import { RutaLogInComponent } from './rutas/ruta-log-in/ruta-log-in.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent,
    RutaLogInComponent,
    RutaInicioComponent,
    RutaDetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Importa el http client
  ],
  providers: [
    UsuarioServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
