import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../models/Departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiUrl = '/api/departements';
  
  constructor( private http:HttpClient ) { }

    // Créer un département
    addDepartement(departement: Departement): Observable<Departement> {
      departement.id = Date.now();
      return this.http.post<Departement>(this.apiUrl, departement);
    }
  
    // Lire tous les départements
    getAllDepartements(): Observable<Departement[]> {
      return this.http.get<Departement[]>(this.apiUrl);
    }
  
    // Lire un département par ID
    getDepartementById(id: number): Observable<Departement> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Departement>(url);
    }
  
    // Mettre à jour un département par ID
    updateDepartement(id: number, departement: Departement): Observable<Departement> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<Departement>(url, departement);
    }
  
    // Supprimer un département par ID
    deleteDepartement(id: number): Observable<void> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<void>(url);
    }
  }