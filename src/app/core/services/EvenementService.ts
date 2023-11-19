import { Injectable } from '@angular/core';
import { Evenement } from '../models/Evenement.model';
import { EtatEvenement } from '../models/etatEvenement.enum';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http : HttpClient){ }
  
  private apiServerUrl = 'http://localhost:8082/evenements';
  
  addEvent(nomE : string , dateDebut:Date ,  dateFin : Date ,  lieu : string ,description:string ,  etatEvent : EtatEvenement , image:string ):Observable<Evenement>{

    const evenement: Evenement  =  {
      nomE :nomE ,
      dateDebut:dateDebut ,
      dateFin : dateFin ,
      lieu:lieu ,
      description:description ,
      etatEvent : etatEvent,
      image : image ,

    }

    return this.http.post<Evenement>(this.apiServerUrl + '/addEvenement', evenement);
  //addEvent(nomE : string , dateDebut:Date ,  dateFin : Date ,  lieu : string ,description:string ,  etatEvent : EtatEvenement , image:string ):Observable<Evenement>{

    //const formData: FormData = new FormData();
    //formData.append('nomE', nomE);
    //formData.append('dateDebut', dateDebut.toString());
    //formData.append('dateFin', dateFin.toString());
    //formData.append('lieu', lieu);
    //formData.append('description', description);
    //formData.append('etatEvent', etatEvent);
    //formData.append('image', image,image.name);
       // formData.append('image', image);

    //const headers = new HttpHeaders();
    //headers.set('Content-Type', 'multipart/form-data');
   // return this.http.post<Evenement>(this.apiServerUrl + '/addEvenement',formData);
  }
  getAllEvents() : Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiServerUrl + '');
}
public deleteEvent(id: number){
  return this.http.delete(this.apiServerUrl + `/${id}`);


}

//updateEvent(updatedEvent: any): Observable<void> {
  //return this.http.put<void>(`${this.apiServerUrl}`, updatedEvent);
//}
getEvenementDetails(idEvenement: number): Observable<Evenement> {
  return this.http.get<Evenement>(`${this.apiServerUrl}/${idEvenement}`);
}


updateEvent(idEvenement: number, evenement: Evenement): Observable<Evenement> {
  const url = `${this.apiServerUrl}/${idEvenement}`;
  return this.http.put<Evenement>(url, evenement);
}
getEvenementById(idEvenement: number): Observable<Evenement> {
  const url = `${this.apiServerUrl}/${idEvenement}`; // Assurez-vous d'avoir la route appropriée dans votre API
  return this.http.get<Evenement>(url);
}
updateEvenement(idEvenement: number, evenement: Evenement): Observable<Evenement> {
  return this.http.put<Evenement>(this.apiServerUrl + '/updateevent'+ `/${idEvenement}`, evenement);
}
}