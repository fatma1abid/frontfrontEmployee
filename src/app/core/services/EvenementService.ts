import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from '../models/Evenement.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http : HttpClient){ }
  
  private apiServerUrl = 'http://localhost:8082/evenements';
  
  addEvent(nomE : string , dateDebut:Date ,  dateFin : Date ,  lieu : string ,description:string ,  etat : string , image:string ):Observable<Evenement>{

    const evenement: Evenement  =  {
      nomE :nomE ,
      dateDebut:dateDebut ,
      dateFin : dateFin ,
      lieu:lieu ,
      description:description ,
      etat:etat ,
      image : image ,
    
    }
    return this.http.post<Evenement>(this.apiServerUrl + '/addEvenement', evenement);
  }
  getAllEvents() : Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiServerUrl + '');
}

}