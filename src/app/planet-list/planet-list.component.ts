import { Component, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planet, DataApi } from '../planet';
import { SearchHelperService } from '../search-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements AfterViewInit, OnDestroy {
  planets: Planet[] = [];
  data: DataApi = null;
  selectedPlanet: Planet = null;

  private subscription: Subscription;
  private subscriptionHttp: Subscription;

  @Output() selected = new EventEmitter<Planet>();

  constructor(private planetService: PlanetsService, private searchService: SearchHelperService) {
    this.subscriptionHttp = this.planetHttpSubs();
  }

  ngAfterViewInit() {
    this.subscription = this.searchService.searchSource$.subscribe({
      next: value => this.subscriptionHttp = this.planetHttpSubs(value),
      error: err => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHttp.unsubscribe();
    this.subscription.unsubscribe();
  }

  select(planet: Planet): void {
    this.selectedPlanet = planet;
    this.selected.emit(planet);
  }

  private planetHttpSubs(searchTerm: string = null): Subscription {
    return this.planetService
      .getPlanets(searchTerm).subscribe({
        next: planets => (this.planets = planets),
        error: () => alert('Service not available')
      });
  }

}
