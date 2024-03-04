

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get(`${this.apiUrl}people/`, { params });
  }

  getCharacterDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

  getFilms(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    return this.http.get(`${this.apiUrl}films/`, {params});
  }

  getPlanets(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }


    return this.http.get(`${this.apiUrl}planets/`, {params});
  }

  getSpecies(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get(`${this.apiUrl}species/`, {params});
  }

  getStarships(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get(`${this.apiUrl}starships/`, {params});
  }

  getVehicles(page: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get(`${this.apiUrl}vehicles/`,{params});
  }
}
