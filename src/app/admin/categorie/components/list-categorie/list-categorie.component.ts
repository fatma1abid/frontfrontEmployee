import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {


  constructor(private categorieService : CategorieService , private dialog:MatDialog){

  }

  categorieList !: Observable<Categorie[]>
  urlImage : string  = 'http://localhost:8080/images' 


   ngOnInit(): void {
     this.categorieList =  this.categorieService.getAllCategorie();
   }



   modifierCategorie(id:any){

   }


   supprimerCategorie(id:any){
      this.categorieService.supprimerCategorie(id).subscribe(
        ()=>{
            this.categorieService.getAllCategorie();
        },
        ()=>{

        }
      )

   }



   
}
