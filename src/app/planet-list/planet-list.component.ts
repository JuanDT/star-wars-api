
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets(): void {
    this.starWarsService.getPlanets(this.currentPage, this.searchTerm).subscribe(data => {
      this.planets = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 0) {
      this.loadPlanets();
    } else {
      this.currentPage = 1;
    }
  }

  onSearch(): void {
    this.loadPlanets();
  }
}
