import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/admin/components/confirmation-dialog/confirmation-dialog.component';
import { ModificationDialogComponent } from 'src/app/admin/categorie/components/modification-dialog/modification-dialog.component';

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
  msg !: string;
  error!:string;


   ngOnInit(): void {
     this.categorieList =  this.categorieService.getAllCategorie();
   }



   openModalModification(id:any): void {
    const dialogRef = this.dialog.open(ModificationDialogComponent, {
      width: '800px',
      height:'450px' ,
      data: { title:"Modification categorie" , categorieId : id}
    });
  
  }



   openModalSuppression(id:any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height:'200px' ,
      data: {title:"Suppression categorie" , content:"Voulez-vous vraiment supprimer cette categorie ?"}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.confirmed){
      this.categorieService.supprimerCategorie(id).subscribe(
        ()=>{
            this.msg = "Categorie supprimé avec succées"
            this.categorieService.getAllCategorie();
        },
        ()=>{
          this.error = "Il ya une erreur qui est survenu"
        }
      )
    }});
  }


   
}
