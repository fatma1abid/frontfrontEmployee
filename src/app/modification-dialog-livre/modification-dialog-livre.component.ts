import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategorieService } from '../core/services/categorie.service';
import { Livre } from '../core/models/livre.model';
import { LivreService } from '../core/services/livre.service';
import { Categorie } from '../core/models/categorie.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modification-dialog-livre',
  templateUrl: './modification-dialog-livre.component.html',
  styleUrls: ['./modification-dialog-livre.component.scss']
})
export class ModificationDialogLivreComponent {

  constructor(private formBuilder:FormBuilder,public dialogRef: MatDialogRef<ModificationDialogLivreComponent>,
    private livreService:LivreService, private categorieService:CategorieService,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }


  modificationLivreForm !: FormGroup
  selectedFile!: File;
  msg !: String;
  error !: String;

  nameFile!:string

  categorieList !: Observable<Categorie[]>

  livre !: any;

  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];
  }


  ngOnInit(): void {


    this.categorieList = this.categorieService.getAllCategorie();

    this.livreService.getLivre(this.data.livreId).subscribe(
      result=>{
        const originalDate = new Date(result.dateDePublication);
        const formattedDate =
          originalDate.getFullYear() +
          '-' +
          ('0' + (originalDate.getMonth() + 1)).slice(-2) +
          '-' +
          ('0' + originalDate.getDate()).slice(-2);
       
        this.livre = {
          titre: result.titre,
          description : result.description,
          nomAuteur:result.nomAuteur,
          nbPages:result.nbPages,
          dateDePublication: formattedDate,
          categorie:result.categorie,
          image : result.image
        }
      }
    );

    this.modificationLivreForm = this.formBuilder.group({
      titre: [null, [Validators.required , Validators.minLength(2)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      nomAuteur: [null, [Validators.required, Validators.minLength(2)]],
      nbPages: [null, [Validators.required]],
      dateDePublication: [null, [Validators.required]],
      categorie : [null , [Validators.required]],
      image: [null, [Validators.required]],
    })


  }


  get f() {
    return this.modificationLivreForm.controls;
  }



  modifierLivre(){

  }


}
