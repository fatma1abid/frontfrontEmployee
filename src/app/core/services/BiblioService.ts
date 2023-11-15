import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bibliotheque } from '../models/Bibliotheque.model';


@Injectable({
  providedIn: 'root'
})
export class BiblioService {


  constructor(private http : HttpClient){ }
  
  private apiServerUrl = 'http://localhost:8082/bibliotheques';
  
  addBiblio(nomB : string , email:string ,  numtel : number ,  horaire : string ,description:string  ):Observable<Bibliotheque>{

    const biblio: Bibliotheque  =  {
      nomB :nomB ,
      email:email ,
      numtel:numtel ,
      horaire:horaire ,
      description:description ,
     
    
    }
    return this.http.post<Bibliotheque>(this.apiServerUrl + '/addbibliotheque', biblio);
  }
  getAllBiblios() : Observable<Bibliotheque[]> {
    return this.http.get<Bibliotheque[]>(this.apiServerUrl + '');
}
}