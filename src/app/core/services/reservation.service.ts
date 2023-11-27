import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiServerUrl =  'http://localhost:8081/api/chambre';

  constructor(private http: HttpClient){} 

  public getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}/getAllRes`);
  }
  public addReservation(Reservation:Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiServerUrl} /addRes`,Reservation);
  }
  public updateReservation(Reservation:Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiServerUrl} /updateRes`,Reservation);
  }

  public deleteReservation(ReservationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteRes/${ReservationId}`);
  }
   

}
