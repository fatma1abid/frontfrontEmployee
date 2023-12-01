import { Component,Inject,  OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { ModifResComponent } from '../modif-res/modif-res.component';
import { ConfirmationComponent } from 'src/app/admin/components/confirmation/confirmation.component';
import { Reservation } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent {

  constructor(
    private reservationService : ReservationService , private dialog:MatDialog
   ){}



   reservationList !: Observable<Reservation[]> 
   msg !: string;
   error!:string;
    
   reservation =  this.reservationService.getReservation(Reservation);
    
   ngOnInit(): void {
    this.reservationList =  this.reservationService.getAllReservation();
    
  } 
  
  openModalModificationn(id:any): void {
    const dialogRef = this.dialog.open(ModifResComponent, {
      width: '500px',
      height:'520px' ,
      data: { title:"Modification reservation" , idReservation : id}
    });
  
  }
  
  
  openModalSuppressionn(id:any): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '280px',
      height:'150px' ,
      data: {title:"Suppression reservation" , content:"Voulez-vous vraiment supprimer cette reservation ?"}
    });
  
  
  
  
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.confirmed){
      this.reservationService.supprimerReservation(id).subscribe(
        ()=>{
            this.msg = "Reservation supprimé avec succées"
            this.reservationService.getAllReservation();
        },
        ()=>{
          this.error = "Il ya une erreur qui est survenu"
        }
      )
    }}
    );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  











}
