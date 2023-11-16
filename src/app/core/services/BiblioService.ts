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
  
  addBiblio(nomB : string , email:string ,  numTel : number ,  horaire : string ,description:string  ):Observable<Bibliotheque>{

    const biblio: Bibliotheque  =  {
      nomB :nomB ,
      email:email ,
      numTel:numTel ,
      horaire:horaire ,
      description:description ,
     
    
    }
    return this.http.post<Bibliotheque>(this.apiServerUrl + '/addbibliotheque', biblio);
  }
  getAllBiblios() : Observable<Bibliotheque[]> {
    return this.http.get<Bibliotheque[]>(this.apiServerUrl + '');
}
public deleteBiblio(idBibliotheque: number){
   return this.http.delete(this.apiServerUrl + `/${idBibliotheque}`);
  
 }
 getBibliothequeById(idBibliotheque: number): Observable<Bibliotheque> {
  const url = `${this.apiServerUrl}/${idBibliotheque}`; // Assurez-vous d'avoir la route appropriée dans votre API
  return this.http.get<Bibliotheque>(url);
}
updateBibliotheque(idBibliotheque: number, bibliotheque: Bibliotheque): Observable<Bibliotheque> {
  return this.http.put<Bibliotheque>(this.apiServerUrl + '/updatebiblio'+ `/${idBibliotheque}`, bibliotheque);

}
}