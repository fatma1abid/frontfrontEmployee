import { Component,Inject,  OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/core/models/chambre.model';
import { ChambreService } from 'src/app/core/services/chambre.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModificationComponent } from '../modification/modification.component';
import { ConfirmationComponent } from 'src/app/admin/components/confirmation/confirmation.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})
export class ListChambreComponent {
   
 constructor(
  private chambreService : ChambreService , private dialog:MatDialog
 ){}
 


  
 chambreList !: Observable<Chambre[]> 
 msg !: string;
 error!:string;
  
  chambre =  this.chambreService.getChambre(Chambre);
  
 ngOnInit(): void {
  this.chambreList =  this.chambreService.getAllChambre();
  
} 

openModalModification(id:any): void {
  const dialogRef = this.dialog.open(ModificationComponent, {
    width: '500px',
    height:'520px' ,
    data: { title:"Modification Chambre" , chambreId : id}
  });

}


openModalSuppression(id:any): void {
  const dialogRef = this.dialog.open(ConfirmationComponent, {
    width: '280px',
    height:'150px' ,
    data: {title:"Suppression Chambre" , content:"Voulez-vous vraiment supprimer cette chambre ?"}
  });




  dialogRef.afterClosed().subscribe(result => {
    if(result && result.confirmed){
    this.chambreService.supprimerChambre(id).subscribe(
      ()=>{
          this.msg = "Chambre supprimé avec succées"
          this.chambreService.getAllChambre();
      },
      ()=>{
        this.error = "Il ya une erreur qui est survenu"
      }
    )
  }}
  );
}






















}





