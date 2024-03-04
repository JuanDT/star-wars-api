
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(): void {
    this.starWarsService.getStarships(this.currentPage, this.searchTerm).subscribe(data => {
      this.starships = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 0) {
      this.loadStarships();
    } else {
      this.currentPage = 1;
    }
  }

  onSearch(): void {
    this.loadStarships();
  }
}
