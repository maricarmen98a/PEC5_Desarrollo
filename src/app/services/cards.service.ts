import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../models/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor( private http: HttpClient ) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://api.punkapi.com/v2/beers');
  }
  getCardById(id: string | null): Observable<Card[]>{
    return this.http.get<Card[]>('https://api.punkapi.com/v2/beers/' + id );
  }
}
