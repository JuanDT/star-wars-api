import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipListComponent } from './starship-list/starship-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  {path:'films', component: FilmListComponent},
  {path:'planets', component: PlanetListComponent},
  {path:'species', component: SpeciesListComponent},
  {path:'starships', component: StarshipListComponent},
  { path: 'character/:url', component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
