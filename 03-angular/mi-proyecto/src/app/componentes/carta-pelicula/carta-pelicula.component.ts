import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {

  @Input()
  urlImagen: String;

  @Input()
  descripcion: String;

  @Input()
  nombreBoton: String;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>();

  ejemploFunction() {
    alert('Hola');
  }

  eventoEjecutarDioClic() {
    this.eventoDioClicEnBoton.emit(true);
  }

  eventoEjecutarDioClicImagen() {
    this.eventoDioClicEnBoton.emit(true);
  }

  eventoOnBlur() {
    console.log('Blur');
  }

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    //Dessuscribirse de todas las suscripciones
  }

}
