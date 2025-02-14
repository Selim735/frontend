import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicule {
  idVehicule?: number;
  localisation: string;
  type: string;
  nombrePlaces: number;
}

@Injectable({
  providedIn: 'root',
})
export class VehiculeService {
  private baseUrl = 'http://localhost:9090/transposync/vehicules';

  constructor(private http: HttpClient) {}

  getAllVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${this.baseUrl}/getAllVehicule`);
  }

  getVehiculeById(id: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${this.baseUrl}/getVehicule/${id}`);
  }

  addVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(`${this.baseUrl}/addVehicule`, vehicule);
  }

  deleteVehicule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteVehicule/${id}`);
  }
}
