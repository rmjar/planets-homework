import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAttrs, Planet } from './planet';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(searchTerm: string = null): Observable<Planet[]> {
    const baseURL = 'https://swapi.co/api/planets/';
    const searchURL = '?search=';
    let URL = baseURL;

    if (searchTerm && searchTerm.length > 0) {
      URL = `${URL}${searchURL}${searchTerm}`;
    }

    return this.http
      .get<ApiAttrs>(URL)
      .pipe(map(data =>
        data.results.map(planetAttrs => new Planet(planetAttrs))));
  }

  getData(searchTerm: string = null): Observable<ApiAttrs> {
    const baseURL = 'https://swapi.co/api/planets/';
    const searchURL = '?search=';
    let URL = baseURL;

    if (searchTerm && searchTerm.length > 0) {
      URL = `${URL}${searchURL}${searchTerm}`;
    }

    return this.http
      .get<ApiAttrs>(URL);
  }
}
