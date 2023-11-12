import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addevenement',
  templateUrl: './addevenement.component.html',
  styleUrls: ['./addevenement.component.scss']
})
export class AddevenementComponent implements OnInit {
  evenementForm! : FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.evenementForm = this.fb.group({
      image: [''], // Ajoutez des validateurs si nécessaire
      nom: ['', Validators.required],
      dated: ['', Validators.required],
      datef: ['', Validators.required],
      lieu: ['', Validators.required],
      description: [''],
      etat: ['valeur4', Validators.required],
    });
  }
  onSubmit() {
    if (this.evenementForm.valid) {
      // Envoyez les données du formulaire à votre service ou effectuez d'autres actions nécessaires.
      console.log(this.evenementForm.value);
    }
  }
}