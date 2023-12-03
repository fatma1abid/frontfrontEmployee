import { Component,ElementRef,Inject,  OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { ModifResComponent } from '../modif-res/modif-res.component';
import { ConfirmationComponent } from 'src/app/admin/components/confirmation/confirmation.component';
import { Reservation } from 'src/app/core/models/reservation.model';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

import  jsPDF  from 'jspdf';
 
 
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
  
  
  @ViewChild('content', { static: true })
  content!: ElementRef;

  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF();

    // Define special elementHandlers to handle specific elements in your HTML
    let specialElementHandlers = {
      '#editor': function (element:any, renderer:any) {
        return true;
      }
    };

    // Add HTML content to the PDF using html method
    doc.html(content, {
      callback: function (pdf) {
        pdf.save('reservation.pdf');
      },
       
      html2canvas: { scale: 0.38 }, // optional, adjust as needed
       
       
      autoPaging: true,
      // Adjust the scale and other options as needed
      
      windowWidth: content.offsetWidth, // Set the width of the "window" (viewport)
       
    });
  
  }
  fileName= 'ReservationSheet.xlsx';
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('content');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  
  
  
  
  
  
  
  
  











}
