import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/admin/components/confirmation-dialog/confirmation-dialog.component';
import { empruntLivre } from 'src/app/core/models/empruntLivre.models';
import { EmpruntLivreService } from 'src/app/core/services/empruntLivre.service';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-list-emprunt-livres',
  templateUrl: './list-emprunt-livres.component.html',
  styleUrls: ['./list-emprunt-livres.component.scss']
})
export class ListEmpruntLivresComponent implements OnInit {


  constructor( private EmpruntLivreService:EmpruntLivreService , private dialog:MatDialog , private livreService:LivreService){
  }



  msg!:string;
  error!:string;

  empruntLivreList !: any[]; 
  empruntDetailsList: any[] = []; 


  ngOnInit(): void {
    this.EmpruntLivreService.getAllEmpruntLivre().subscribe((emprunts: any[]) => {
      this.empruntLivreList = emprunts;

      this.initEmpruntDetailsList();
    });
  }

  initEmpruntDetailsList(): void {
    const observables: Observable<any>[] = this.empruntLivreList.map(emprunt => {
      const userObservable = this.livreService.getUserByEmprunt(emprunt.idEmprunt);
      const livreObservable = this.livreService.getLivreByEmprunt(emprunt.idEmprunt);

      return forkJoin([userObservable, livreObservable]).pipe(
        map(([userDetails, livreDetails]) => {
          return {
            emprunt,
            user: userDetails,
            livre: livreDetails
          };
        })
      );
    });

    forkJoin(observables).subscribe((result: any[]) => {
      this.empruntDetailsList = result;
    });
  }



  accepterDemandeEmprunt(id:any , emprunt:any){
      this.EmpruntLivreService.accepterDemandeEmprunt(id,emprunt).subscribe(
        ()=>{
          this.msg = "Demande accepté avec succées"
        },
        ()=>{
          this.error = "Il ya une erreur qui est survenu"
        }
      )
  }


  refuserDemandeEmprunt(idEmprunt:any ,idLivre:any ){
    this.EmpruntLivreService.refuserDemandeEmprunt(idEmprunt , idLivre).subscribe(
      ()=>{
        this.msg = "Demande refusé avec succées"
      },
      ()=>{
        this.error = "Il ya une erreur qui est survenu"
      }
    )

  }


  modifierDemandeEmprunt(id:any){

  }



  openModalSuppression(id:any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      height:'200px' ,
      data: {title:"Suppression emprunt livre" , content:"Voulez-vous vraiment supprimer cette emprunt ?"}

    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.confirmed){
      this.EmpruntLivreService.supprimerEmpruntLivre(id).subscribe(
        ()=>{
            this.msg = "emprunt livre supprimé avec succées"
        },
        ()=>{
          this.error = "Il ya une erreur qui est survenu"
        }
      )
    }});
  }

}


