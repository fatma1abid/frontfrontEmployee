import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="http://localhost:8080/"
  constructor(private httpClient: HttpClient) {


  }
  getUsers():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+"utilisateurs")
  }
  register(data:any):Observable<any>{
    return this.httpClient.post<any>(this.url+"utilisateurs/register",data)
  }
  login(data:any):Observable<any>{
    return this.httpClient.post<any>(this.url+"utilisateurs/login",data)
  }
  getUser(id:any):Observable<any>{
    return this.httpClient.get<any>(`${this.url}utilisateurs/get/${id}`);
  }
  updateUser(id:any,data:any):Observable<any>{
    return this.httpClient.put<any>(`${this.url}utilisateurs/edit/${id}`,data);
  }
  changerEtat(id:any,etat:any):Observable<any>{
    return this.httpClient.put<any>(`${this.url}utilisateurs/etat/${id}`,etat);
  }
}
