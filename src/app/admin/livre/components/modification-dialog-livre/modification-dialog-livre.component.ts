import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LivreService } from '../../../../core/services/livre.service';


@Component({
  selector: 'app-modification-dialog-livre',
  templateUrl: './modification-dialog-livre.component.html',
  styleUrls: ['./modification-dialog-livre.component.scss']
})
export class ModificationDialogLivreComponent {

  constructor(private formBuilder:FormBuilder,public dialogRef: MatDialogRef<ModificationDialogLivreComponent>,
    private livreService:LivreService, 
    @Inject(MAT_DIALOG_DATA) public data: any){

  }


  modificationLivreForm !: FormGroup
  selectedFile!: File;
  msg !: String;
  error !: String;

  nameFile!:string


  livre !: any;

  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];
  }


  ngOnInit(): void {

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
      image: [null, [Validators.required]],
    })


  }


  get f() {
    return this.modificationLivreForm.controls;
  }


  modifierLivre(){
    this.livreService.modifierLivre(this.data.livreId,
      this.modificationLivreForm.get('titre')?.value,
      this.modificationLivreForm.get('description')?.value,
      this.modificationLivreForm.get('nomAuteur')?.value,
      this.modificationLivreForm.get('nbPages')?.value,
      this.modificationLivreForm.get('dateDePublication')?.value,
      this.selectedFile).subscribe(
      ()=>{
        this.msg = "Livre modifié avec succées"
          },
     ()=>{
        this.error = "Il ya une erreur qui est survenu"
     }
    )

  }


}
