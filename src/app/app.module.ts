import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmListComponent } from './film-list/film-list.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    FilmListComponent,
    PlanetListComponent,
    SpeciesListComponent,
    StarshipListComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
