import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class LivreService {

  constructor(private http : HttpClient){

  }

  private apiServerUrl = 'http://localhost:8080/livres';


  addLivre(titre : string, description:string,nomAuteur:string,nbPages:number,dateDePublication:Date,categorie:number,image:File):Observable<Livre>{

    const formData: FormData = new FormData();
    formData.append('titre', titre );
    formData.append('description', description );
    formData.append('nomAuteur', nomAuteur );
    formData.append('nbPages', nbPages.toString() );
    formData.append('dateDePublication', dateDePublication.toString() );
    formData.append('idCategorie', categorie.toString() );
    formData.append('image', image, image.name);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');


    return this.http.post<Livre>(this.apiServerUrl + '/add', formData,{headers});
  }



  getAllLivres() : Observable<Livre[]> {
      return this.http.get<Livre[]>(this.apiServerUrl + '');
  }


  supprimerLivre(id:any)  {
    return this.http.delete(this.apiServerUrl + `/${id}`);
  }

}
