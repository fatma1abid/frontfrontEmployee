import { Component , OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { BiblioService } from 'src/app/core/services/BiblioService';


@Component({
  selector: 'app-addbiblio',
  templateUrl: './addbiblio.component.html',
  styleUrls: ['./addbiblio.component.scss']
})

export class AddbiblioComponent implements OnInit {

  biblioForm! : FormGroup;
  
  constructor(private fb: FormBuilder , private BiblioService:BiblioService) {}

  ngOnInit(): void {
    this.biblioForm = this.fb.group({
      nomB: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(8)]],
      numtel: [null, [Validators.required, Validators.minLength(8)]],
      horaire: [null, [Validators.required ,Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
   

    });
  }
  get f() {
    return this.biblioForm.controls;
  }
  AjouterBiblio(){
    this.BiblioService.addBiblio(
    this.biblioForm.get('nomB')?.value,
    this.biblioForm.get('email')?.value,
    this.biblioForm.get('numtel')?.value,
    this.biblioForm.get('horaire')?.value,
    this.biblioForm.get('description')?.value).subscribe(
    ()=>{
      console.log("Bibliotheque ajouté avec succes")
    }
    )
  }

}