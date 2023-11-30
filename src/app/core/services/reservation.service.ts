import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Reservation } from '../models/reservation.model';
import { Chambre } from '../models/chambre.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiServerUrl =  'http://localhost:8081/api/reservation';
   
  constructor(private http: HttpClient){ } 

 

  

  addReservation(anneeUniversitaire: Date, estValide: boolean): Observable<Reservation> {
    if (estValide) {
      estValide=false;
      const reservation: Reservation = { anneeUniversitaire,estValide };
      return this.http.post<Reservation>(`${this.apiServerUrl}/addReservation`, reservation);
      
    } else {
      // Handle the case where estValide is false
      console.error('Error: estValide is false');
      return of(null); // Return an observable with a null value or adjust based on your needs
    }
  }
  

  public getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}/getAllReservation`);
  } 
   
  supprimerReservation(idReservation:any)  {
    return this.http.delete(this.apiServerUrl + `/deleteReservation/${idReservation}`);
  }

getReservation(idReservation:any) : Observable<Reservation> {
    return this.http.get<Reservation>(this.apiServerUrl + `/${idReservation}`);
  }


  modifierReservation(idReservation : number ,anneeUniversitaire : Date, estValide  : Boolean): Observable<Reservation> {
    const reservation: Reservation = {idReservation, anneeUniversitaire, estValide };  
    return this.http.put<Reservation>(this.apiServerUrl+`/updateReservation`, reservation);
  }





  

















  /*public getReservation(): Observable<Reservation[]> {
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
  }*/
   

}
function of(arg0: null): Observable<Reservation> {
  throw new Error('Function not implemented.');
}

