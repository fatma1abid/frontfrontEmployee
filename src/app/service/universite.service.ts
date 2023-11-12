import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = '/api/universites';

  constructor(private http: HttpClient) {}

  // Ajout d'une université
  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(this.apiUrl, universite);
  }
}