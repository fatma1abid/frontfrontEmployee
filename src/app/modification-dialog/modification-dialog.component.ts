import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategorieService } from '../core/services/categorie.service';
import { Categorie } from '../core/models/categorie.model';

@Component({
  selector: 'app-modification-dialog',
  templateUrl: './modification-dialog.component.html',
  styleUrls: ['./modification-dialog.component.scss']
})
export class ModificationDialogComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,public dialogRef: MatDialogRef<ModificationDialogComponent>,
    private categorieService:CategorieService,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }

  modificationCategorieForm !: FormGroup
  selectedFile!: File;
  msg !: String;
  error !: String;

  nameFile!:string

  categorie !: Categorie;

  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];
  }


  ngOnInit(): void {

    this.categorieService.getCategorie(this.data.categorieId).subscribe(
      result=>{
        this.categorie = {
          nom: result.nom,
          description : result.description,
          image : result.image
        }
      }
    );

    this.modificationCategorieForm = this.formBuilder.group({
      nom: [null, [Validators.required , Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      image: [null, [Validators.required]],
    })

  }

  
  get f() {
    return this.modificationCategorieForm.controls;
  }



  modifierCategorie(){
    this.categorieService.modifierCategorie(this.data.categorieId,this.modificationCategorieForm.get('nom')?.value,this.modificationCategorieForm.get('description')?.value,this.selectedFile).subscribe(
      ()=>{
        this.msg = "Categorie modifié avec succées"
          },
     ()=>{
        this.error = "Il ya une erreur qui est survenu"
     }
    )

  }

}
