import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  /*
    Permite tomar el valor de un input mediante una referencia local.
    Es lo equivalente a document.querySelector() en js

    El signo de admiración significa que el objeto nunca va a ser nulo
  */
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  constructor( private gifsService: GifsService){}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value; 

    if (valor.trim().length == '') {
      return;
    }
    
    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = '';

  }

}
