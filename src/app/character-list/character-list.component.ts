
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.starWarsService.getCharacters(this.currentPage, this.searchTerm).subscribe(data => {
      this.characters = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if(this.currentPage > 0){
      this.loadCharacters();
    }else{
      this.currentPage=1
    }
    
  }

  onSearch(): void {
    this.loadCharacters();
  }
}
