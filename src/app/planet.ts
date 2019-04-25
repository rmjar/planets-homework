
export interface ApiAttrs {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}


export interface PlanetAttrs {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}


export class Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;


  constructor(attrs: Partial<PlanetAttrs> = {}) {
    this.name = attrs.name;
    this.rotation_period = attrs.rotation_period;
    this.orbital_period = attrs.orbital_period;
    this.diameter = attrs.diameter;
    this.climate = attrs.climate;
    this.gravity = attrs.gravity;
    this.terrain = attrs.terrain;
    this.surface_water = attrs.surface_water;
    this.population = attrs.population;
    this.residents = attrs.residents;
    this.films = attrs.films;
    this.created = attrs.created;
    this.edited = attrs.edited;
    this.url = attrs.url;
  }
}