import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent implements OnInit {

  gifs: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerGif(result: any){
    this.gifs = result;
  }

}
