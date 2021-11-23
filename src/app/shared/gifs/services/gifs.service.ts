import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' //Se puede usar en cualquier modulo de manera global
})
export class GifsService {

  private apiKey: string = 'HtO9fpIql5yVeRXNS7mErl2SOJeJV7L7';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Datum[] = []; 

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
    console.log(this.resultados);
  }

  buscarGifs(query: string){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }

    //El Http params es para organizar el link de la API
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe( (res: SearchGifsResponse) => {
        console.log(res);
        this.resultados = res.data;
        console.log(this.resultados);
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }

}
