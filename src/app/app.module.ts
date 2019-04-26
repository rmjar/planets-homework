import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { BrowseButtonsComponent } from './browse-buttons/browse-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    SearchBarComponent,
    PlanetDetailComponent,
    PlanetCardComponent,
    BrowseButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [PlanetListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
