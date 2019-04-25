import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter, bufferTime, switchMap, subscribeOn } from 'rxjs/operators';
import { MatInput } from '@angular/material';
import { PlanetsService } from '../planets.service';
import { SearchHelperService } from '../search-helper.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myInput')
  input: ElementRef;

  private subscription: Subscription;

  constructor(private searchHelper: SearchHelperService) { }

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    const input$ = fromEvent<any>(input, 'keyup');

    this.subscription = input$.pipe(
      map<any, string>(e => e.target.value),
      filter(v => !v || v.length > 2 || v.length === 0),
      debounceTime(750),
      distinctUntilChanged())
      .subscribe({
        next: value => {
          return this.searchHelper.announceSearch(value);
        },
        error: err => console.log(err),
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
