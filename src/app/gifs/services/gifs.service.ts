import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';


const API_KEY: string = 'qYf9n5B3Cy71d2ZCGpOqaqc61504AS47';

@Injectable({
  providedIn: 'root',
})
export class GifsService {


  constructor(private http:HttpClient) {
    this.loadLocalStorage();
  }

  private _gifsTag: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifsList: Gif[] = [];

  get gifsTag():string[]{
    return [...this._gifsTag];
  }

  validationTag(tag:string){
    if(tag.length === 0) return; //validamos que no se envie sin nada.
    tag = tag.toUpperCase();
     if(this._gifsTag.includes(tag)){ //vemos si el tag ya está en el arreglo.
      this._gifsTag = this._gifsTag.filter(tags => tags !== tag); //si está lo eliminamos y lo volvemos a poner después.
     }
    this._gifsTag.unshift(tag);
    this._gifsTag.splice(10); //limitamos la cantidad de tags a 10.
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._gifsTag))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._gifsTag = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._gifsTag[0]);
  }

  searchTag(tag:string):void{

    this.validationTag(tag);

    const params = new HttpParams()
    .set('api_key', API_KEY)
    .set('limit', '10')
    .set('q', tag)
  
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}).subscribe(resp => {
      this.gifsList = resp.data;
      console.log('data del gif: ', resp.data);
    });
    this.saveLocalStorage();
  }
}
