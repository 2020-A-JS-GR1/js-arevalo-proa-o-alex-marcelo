import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Tienda1Component} from './routes/tienda1/tienda1.component';
import {Tienda2Component} from './routes/tienda2/tienda2.component';
import {TablaProductosComponent} from './components/tabla-productos/tabla-productos.component';
import {RutaCrearProductoComponent} from './routes/ruta-crear-producto/ruta-crear-producto.component';
import {RutaEditarProductoComponent} from './routes/ruta-editar-producto/ruta-editar-producto.component';
import {RutaListaProductoComponent} from './routes/ruta-lista-producto/ruta-lista-producto.component';
import {FormularioProductoComponent} from './components/formulario-producto/formulario-producto.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Tienda1Component,
    Tienda2Component,
    TablaProductosComponent,
    RutaCrearProductoComponent,
    RutaEditarProductoComponent,
    RutaListaProductoComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
