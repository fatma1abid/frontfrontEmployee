import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre.model';
import { TypeChambre } from '../models/TypeChambre.model';
 

@Injectable({providedIn: 'root'})
export class ChambreService {

  private apiServerUrl =  'http://localhost:8081/api/chambres';

  constructor(private http: HttpClient){} 

  

  /*addChambre(numeroChambre : number , typeChambre:TypeChambre ):Observable<Chambre>{
    const formData: FormData = new FormData();
    formData.append('numeroChambre',numeroChambre.toString() );
    formData.append('typeChambre',typeChambre );
    return this.http.post<Chambre>(this.apiServerUrl + '/addChambre', formData);
  }*/

  addChambre(numeroChambre: number, typeChambre: TypeChambre): Observable<Chambre> {
    const chambre: Chambre = { numeroChambre, typeChambre };  
    return this.http.post<Chambre>(`${this.apiServerUrl}/addChambre`, chambre);
  }
  
  /*
  public addChambre(chambre:Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiServerUrl}api/chambres/addChambre`,chambre);
  }*/

  public getAllChambre(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiServerUrl}/getAllChambre`);
  }


  supprimerChambre(id:any)  {
    return this.http.delete(this.apiServerUrl + `/deletechambre/${id}`);
  }

  getChambre(id:any) : Observable<Chambre> {
    return this.http.get<Chambre>(this.apiServerUrl + `/${id}`);
  }

  modifierChambre(id:any , numero : number , typeChambre:TypeChambre ) :Observable<Chambre> {

    const formData: FormData = new FormData();
    formData.append('numero', numero.toString());
    formData.append('typeChambre', typeChambre);
    


    return this.http.put<Chambre>(this.apiServerUrl + `/${id}` , formData);
  }


 

}