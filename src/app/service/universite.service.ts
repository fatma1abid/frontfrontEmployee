import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = '/api/universites';

  constructor(private http: HttpClient) {}

  
  // Ajout d'une université
  addUniversite(universite: Universite): Observable<Universite> {
    universite.id = Date.now();
    return this.http.post<Universite>(this.apiUrl, universite);
  }
  

  public findAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}`);
  }

  updateUniversite(id: number, value: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/${id}`, value);
  }
  
  getUniversiteById(id: number): Observable<Universite> {
    const url = `${this.apiUrl}/${id}`;
  
    return this.http.get<Universite>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Error fetching universite with ID ${id}:`, error);
  
        // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
  
        // Renvoie une Observable avec une erreur pour que le composant puisse gérer l'erreur
        return throwError('Une erreur s\'est produite lors de la récupération de l\'université.');
      })
    );
  }
  
  deleteUniversite(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Error deleting universite with ID ${id}:`, error);
        return throwError('Une erreur s\'est produite lors de la suppression de l\'université.');
      })
    );
  }
}