
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  species: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadSpecies();
  }

  loadSpecies(): void {
    this.starWarsService.getSpecies(this.currentPage, this.searchTerm).subscribe(data => {
      this.species = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 0) {
      this.loadSpecies();
    } else {
      this.currentPage = 1;
    }
  }

  onSearch(): void {
    this.loadSpecies();
  }
}
