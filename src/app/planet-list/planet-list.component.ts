import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  selectedPlanet: Planet = null;

  @Output() selected = new EventEmitter<Planet>();

  constructor(private planetService: PlanetsService) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe({
      next: planets => (this.planets = planets),
      error: () => alert('Service not available')
    });
  }

  select(planet: Planet): void {
    this.selectedPlanet = planet;
    this.selected.emit(planet);
  }

}
