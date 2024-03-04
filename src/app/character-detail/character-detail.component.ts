
import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() characterUrl: string = '';
  characterDetails: any;

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starWarsService.getCharacterDetails(this.characterUrl).subscribe(data => {
      this.characterDetails = data;
    });
    console.log("url: "+this.characterUrl)
  }
}
