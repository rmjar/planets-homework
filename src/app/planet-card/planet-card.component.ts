import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../planets.service';
import { Planet } from '../planet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent implements OnInit, OnDestroy {
  planet: Planet = null;

  private subscriptionHttp: Subscription;

  constructor(private planetService: PlanetsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionHttp = this.route.params.subscribe(params => {
      this.planetService
        .getPlanetByID(params.id).subscribe({
          next: data => this.planet = data,
          error: () => alert('Service not available')
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionHttp) {
      this.subscriptionHttp.unsubscribe();
    }
  }

}
