import { Component , OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { EvenementService } from 'src/app/core/services/EvenementService';


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
  constructor(private fb: FormBuilder , private evenementService:EvenementService) {}

  ngOnInit(): void {
    this.evenementForm = this.fb.group({
      nomE: [null, [Validators.required, Validators.minLength(3)]],
      dateDebut: [null, Validators.required],
      dateFin: [null, Validators.required],
      lieu: [null, [Validators.required ,Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      etatEvent: ['PLANIFIE'],
      image: [null], // Ajoutez des validateurs si nécessaire

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
    this.selectedFile.name).subscribe(
      //this.selectedFile).subscribe(

      ()=>{
        console.log("Evenement ajouté avec succes")
      }
    )
  }

  //onSubmit() {
    //if (this.evenementForm.valid) {
      // Envoyez les données du formulaire à votre service ou effectuez d'autres actions nécessaires.
      //console.log(this.evenementForm.value);
    //}
  //}
}