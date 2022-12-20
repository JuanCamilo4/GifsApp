import { Component, EventEmitter, Output } from '@angular/core';
import { Datum } from '../gifs/interfaces/gifs.interface';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() data = new EventEmitter<Datum[]>();

  gifs!: Datum[];

  title: string = "Aplicación de Gifs";

  get historial() {
    return this.gifsService.historial;
  }

  constructor( public gifsService: GifsService){}

  buscar( termino: string ){
    this.gifsService.buscarGifs(termino)
      .subscribe(result => {
        this.gifs = result.data;
        this.data.emit(this.gifs);
      })
  }

  delete(index: number){
    this.gifsService.deleteBusqueda(index);
  }

}
