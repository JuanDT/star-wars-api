
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.starWarsService.getFilms(this.currentPage, this.searchTerm).subscribe(data => {
      this.films = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 0) {
      this.loadFilms();
    } else {
      this.currentPage = 1;
    }
  }

  onSearch(): void {
    this.loadFilms();
  }
}
