import { Component , OnInit , Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { EvenementService } from 'src/app/core/services/EvenementService';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-addevenement',
  templateUrl: './addevenement.component.html',
  styleUrls: ['./addevenement.component.scss']
})
export class AddevenementComponent implements OnInit {

  evenementForm! : FormGroup;
  selectedFile!: File;
  nameFile!:string

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  constructor(private fb: FormBuilder , private evenementService:EvenementService ,  @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.evenementForm = this.fb.group({
      nomE: [null, [Validators.required, Validators.minLength(3)]],
      dateDebut: [this.data ? this.data.dateDebut : null, Validators.required],
      dateFin: [null, Validators.required],
      lieu: [null, [Validators.required ,Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      etatEvent: ['PLANIFIE'],
      image: [null], // Ajoutez des validateurs si nécessaire

    });
    this.evenementService.selectedDate$.subscribe((selectedDate) => {
      if (selectedDate) {
        // Pré-remplissez la date de début avec la date sélectionnée
        this.evenementForm.patchValue({ dateDebut: selectedDate });
      }
    });
  }
  get f() {
    return this.evenementForm.controls;
  }
  AjouterEvent(){
    this.evenementService.addEvent(
    this.evenementForm.get('nomE')?.value,
    this.evenementForm.get('dateDebut')?.value,
    this.evenementForm.get('dateFin')?.value,
    this.evenementForm.get('lieu')?.value,
    this.evenementForm.get('description')?.value,
    this.evenementForm.get('etatEvent')?.value,
      this.selectedFile).subscribe(

      ()=>{
        console.log("Evenement ajouté avec succes")
        this.evenementForm.reset();
        this.refreshEventsList();

      }
    )
  }
  private refreshEventsList() {
    this.evenementService.getAllEvents();
  }

}