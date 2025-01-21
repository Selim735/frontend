import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { VehiculeService, Vehicule } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css'],
})
export class VehiculeComponent implements OnInit {
  vehicules: Vehicule[] = [];
  selectedVehicule?: Vehicule;

  constructor(private vehiculeService: VehiculeService) {}

  ngOnInit(): void {
    this.loadVehicules();
  }

  loadVehicules(): void {
    this.vehiculeService.getAllVehicules().subscribe((data) => {
      this.vehicules = data;
    });
  }

  selectVehicule(id: number): void {
    this.vehiculeService.getVehiculeById(id).subscribe((data) => {
      this.selectedVehicule = data;
    });
  }

  addVehicule(): void {
    const newVehicule: Vehicule = {
      localisation: 'New Location',
      type: 'Bus',
      nombrePlaces: 50,
    };
    this.vehiculeService.addVehicule(newVehicule).subscribe(() => {
      this.loadVehicules();
    });
  }

  deleteVehicule(id: number): void {
    this.vehiculeService.deleteVehicule(id).subscribe(() => {
      this.loadVehicules();
    });
  }
}
