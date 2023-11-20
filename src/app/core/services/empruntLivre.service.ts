import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empruntLivre } from '../models/empruntLivre.models';

@Injectable({
  providedIn: 'root'
})
export class EmpruntLivreService {

  constructor(private http : HttpClient){

  }

  private apiServerUrl = 'http://localhost:8080/emprunts';


  addEmpruntLivre(email : string , dateDebutEmprunt:Date , dateFinEmprunt:Date , idLivre:number):Observable<empruntLivre>{
     
    const formData: FormData = new FormData();
    formData.append('email', email );
    formData.append('dateDebutEmprunt', dateDebutEmprunt.toString() );
    formData.append('dateFinEmprunt', dateFinEmprunt.toString() );
    formData.append('idLivre', idLivre.toString() );

    return this.http.post<empruntLivre>(this.apiServerUrl + '/add', formData);
  }



  getAllEmpruntLivre() : Observable<empruntLivre[]> {
      return this.http.get<empruntLivre[]>(this.apiServerUrl + '');
  }


  supprimerEmpruntLivre(id:any)  {
    return this.http.delete(this.apiServerUrl + `/${id}`);
  }


  getEmpruntLivre(id:any) : Observable<empruntLivre> {
    return this.http.get<empruntLivre>(this.apiServerUrl + `/${id}`);
  }


  modifierEmpruntLivre(id:any ,nom : string , description:string , image:File ) :Observable<empruntLivre> {

    const formData: FormData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('image', image, image.name);


    return this.http.put<empruntLivre>(this.apiServerUrl + `/${id}` , formData);
  }


}
