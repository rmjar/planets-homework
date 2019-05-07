import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;

  constructor() { }

  ngOnInit() {
  }

  getPlanetId(): string {
    const url = this.planet.url.substr(0, this.planet.url.length - 1);
    return url.substr(url.lastIndexOf('/') + 1);
  }

}
