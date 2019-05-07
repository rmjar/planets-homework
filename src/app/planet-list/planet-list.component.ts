import { Component, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planet, DataApi, NavigationLinks } from '../planet';
import { SearchHelperService } from '../search-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements AfterViewInit, OnDestroy {
  planets: Planet[] = [];
  navigationLinks: NavigationLinks = {
    previous: null,
    next: null,
  };

  data: DataApi = null;
  clickedLink: string = null;

  private subscription: Subscription;
  private subscriptionHttp: Subscription;


  constructor(private planetService: PlanetsService, private searchService: SearchHelperService) {
    this.subscriptionHttp = this.dataHttpSubs();
  }

  ngAfterViewInit() {
    this.subscription = this.searchService.searchSource$.subscribe({
      next: value => this.subscriptionHttp = this.dataHttpSubs(null, value),
      error: err => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHttp.unsubscribe();
    this.subscription.unsubscribe();
  }

  clickedLinkListener(event) {
    this.clickedLink = event;
    if (this.subscriptionHttp) {
      this.subscriptionHttp.unsubscribe();
    }
    this.subscriptionHttp = this.dataHttpSubs(this.clickedLink);
  }

  private dataHttpSubs(link: string = null, searchTerm: string = null): Subscription {
    return this.planetService
      .getData(link, searchTerm).subscribe({
        next: data => {
          const {results, previous, next} = data;
          this.planets = results;
          this.navigationLinks.previous = previous;
          this.navigationLinks.next = next;
        },
        error: () => alert('Service not available')
      });
  }
}
