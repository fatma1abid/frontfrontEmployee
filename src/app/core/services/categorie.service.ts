import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http : HttpClient){

  }

  private apiServerUrl = 'http://localhost:8080/categories';


  addCategorie(nom : string , description:string , image:string){

    const categorie: Categorie  =  {
      nom : nom ,
      description:description,
      image: image
    }
    return this.http.post(this.apiServerUrl + '/add', categorie);
  }


}
