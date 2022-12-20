import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Datum } from '../interfaces/gifs.interface';
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

  gifs: Datum[] = [];

  load: boolean = false;

  constructor( private gifsService: GifsService){}

  buscar() {
    this.load = true;
    const valor = this.txtBuscar.nativeElement.value; 
    if (valor.trim().length == '') {
      return;
    }
    this.gifsService.buscarGifs(valor)
      .subscribe(result => {
        console.log(result);
        this.gifs = result.data;
        this.load = false;
      })
    //this.txtBuscar.nativeElement.value = '';
  }

  reciveData(data: Datum[]) {
    this.gifs = data;
  }

}
