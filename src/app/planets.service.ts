import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAttrs, Planet } from './planet';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const basePlanetURL = 'https://swapi.co/api/planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getData(link: string = null, searchTerm: string = null): Observable<ApiAttrs> {
    const searchURL = '?search=';
    let URL = link ? link : basePlanetURL;

    if (searchTerm && searchTerm.length > 0) {
      URL = `${URL}${searchURL}${searchTerm}`;
    }

    return this.http
      .get<ApiAttrs>(URL);
  }

  getPlanet(URL: string): Observable<Planet> {
    return this.http
      .get<Planet>(URL);
  }

  getPlanetByID(id: string): Observable<Planet> {
    const URL = `${basePlanetURL}${id}`;
    return this.http
      .get<Planet>(URL);

  }
}
