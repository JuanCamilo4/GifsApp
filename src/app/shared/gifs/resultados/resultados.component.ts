import { Component, Input } from '@angular/core';
import { Datum } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{

  @Input() gifs!: Datum[];

  constructor(private gifsService: GifsService){}

}
