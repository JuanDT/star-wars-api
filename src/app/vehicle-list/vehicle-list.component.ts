
import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: any[] = [];
  currentPage: number = 1;
  searchTerm: string = '';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.starWarsService.getVehicles(this.currentPage, this.searchTerm).subscribe(data => {
      this.vehicles = data.results;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 0) {
      this.loadVehicles();
    } else {
      this.currentPage = 1;
    }
  }

  onSearch(): void {
    this.loadVehicles();
  }
}
