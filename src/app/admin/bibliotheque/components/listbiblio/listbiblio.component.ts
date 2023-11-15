import { Component , OnInit } from '@angular/core';
import { Bibliotheque } from 'src/app/core/models/Bibliotheque.model';
import { BiblioService } from 'src/app/core/services/BiblioService';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listbiblio',
  templateUrl: './listbiblio.component.html',
  styleUrls: ['./listbiblio.component.scss']
})
export class ListbiblioComponent {


  constructor(private BiblioService : BiblioService){

  }

  biblioList !: Observable<Bibliotheque[]>


   ngOnInit(): void {
     this.biblioList =  this.BiblioService.getAllBiblios();
   

 
}}
