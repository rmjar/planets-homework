import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAttrs, PlanetAttrs, Planet } from './planet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http
      .get<ApiAttrs>('https://swapi.co/api/planets/')
      .pipe(map(data =>
        data.results.map(planetAttrs => new Planet(planetAttrs))));
  }
}
