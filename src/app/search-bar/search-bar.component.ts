import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter, bufferTime } from 'rxjs/operators';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit {
  @ViewChild('myInput')
  input: ElementRef;
  searchString: string;

  constructor(private list: PlanetListComponent) { }

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    const input$ = fromEvent<any>(input, 'keyup');

    const keyboard$ = input$.pipe(
      map<any, string>(e => e.target.value),
      filter(v => v.length > 2 || v.length === 0),
      distinctUntilChanged(),
      debounceTime(400)
    );

    const s = keyboard$.subscribe(v => console.log(v));
  }

}
