import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, forkJoin, map } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/admin/components/confirmation-dialog/confirmation-dialog.component';
import { Categorie } from 'src/app/core/models/categorie.model';
import { Livre } from 'src/app/core/models/livre.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { LivreService } from 'src/app/core/services/livre.service';
import { ModificationDialogLivreComponent } from 'src/app/admin/livre/components/modification-dialog-livre/modification-dialog-livre.component';

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


  LivreList !: any[]; 
  livreDetailsList: any[] = []; 




   ngOnInit(): void {
     //this.livreList =  this.livreService.getAllLivres();  


     this.livreService.getAllLivres().subscribe((livres: any[]) => {
      this.LivreList = livres;

      this.initLivreDetailsList();
    });
   
   }

   initLivreDetailsList(): void {
    const observables: Observable<any>[] = this.LivreList.map(livre => {
      const categorieObservable = this.CategorieService.getCategorieDuLivre(livre.idLivre);
  
      return categorieObservable.pipe(
        map(categorieDetails => ({
          livre,
          categorie: categorieDetails
        }))
      );
    });
  
    forkJoin(observables).subscribe((result: any[]) => {
      this.livreDetailsList = result;
      console.log(result)
    });
  }



   openModalModification(id:any, idCategorie:any): void {
    const dialogRef = this.dialog.open(ModificationDialogLivreComponent, {
      width: '550px',
      height:'500px' ,
      data: { title:"Modification livre" , livreId : id , categorieId:idCategorie}
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
