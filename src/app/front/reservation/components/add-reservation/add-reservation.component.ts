 
import { Component ,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/core/models/reservation.model';
import { DatePipe } from '@angular/common';
import { Chambre } from 'src/app/core/models/chambre.model';
@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit{
  constructor  (   private formBuilder :  FormBuilder , private reservationService:ReservationService ){}

  reservationForm !: FormGroup;
  selectedFile!: File;
  msg !: String;
  error !: String;
  anneeUniversitaire = new Date();
   
  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];

  }
   


  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      anneeUniversitaire: [null, [Validators.required , Validators.minLength(1)]],
      estValide: [null, [Validators.required, Validators.minLength(1)]],
      

    })  
  }

   


  get f() {
    return this.reservationForm.controls;
  }

  AjouterReservation(){
    this.reservationService.addReservation(this.reservationForm.get('anneeUniversitaire')?.value,this.reservationForm.get('estValide')?.value
    ).subscribe(
      ()=>{
         this.msg = "Reservation ajouté avec succées"
         this.reservationForm.reset();
         this.refreshReservationList();
      },
      ()=>{
           this.error = "Il ya une erreur qui est survenu"
      }
    )  }


    private refreshReservationList() {
      this.reservationService.getAllReservation();
    }
    
 
}
