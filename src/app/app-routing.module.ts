import { MainPageComponent } from './main-page/main-page.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'planets/:id', component: PlanetCardComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
