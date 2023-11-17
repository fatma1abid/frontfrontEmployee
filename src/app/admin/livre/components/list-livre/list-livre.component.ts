import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Categorie } from 'src/app/core/models/categorie.model';
import { Livre } from 'src/app/core/models/livre.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { LivreService } from 'src/app/core/services/livre.service';
import { ModificationDialogLivreComponent } from 'src/app/modification-dialog-livre/modification-dialog-livre.component';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.scss']
})
export class ListLivreComponent {

  constructor(private livreService : LivreService ,  private dialog:MatDialog , private CategorieService:CategorieService){
  }

  livreList !: Observable<Livre[]>
  urlImage : string  = 'http://localhost:8080/images_livres' 
  msg!:string;
  error!:string;


  category !: Categorie;



   ngOnInit(): void {
     this.livreList =  this.livreService.getAllLivres();  
   
   }

   /*getCategoryByLivre(idLivre: any) {
    this.CategorieService.getCategorieDuLivre(idLivre).subscribe(
      categorieResult => this.category = categorieResult
    );
  }*/



   openModalModification(id:any): void {
    const dialogRef = this.dialog.open(ModificationDialogLivreComponent, {
      width: '1000px',
      height:'500px' ,
      data: { title:"Modification livre" , livreId : id}
    });
  
  }


   openModalSuppression(id:any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height:'200px' ,
      data: {title:"Suppression livre" , content:"Voulez-vous vraiment supprimer ce livre ?"}

    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.confirmed){
      this.livreService.supprimerLivre(id).subscribe(
        ()=>{
            this.msg = "Livre supprimé avec succées"
            this.livreService.getAllLivres().subscribe();
        },
        ()=>{
          this.error = "Il ya une erreur qui est survenu"
        }
      )
    }});
  }


}
