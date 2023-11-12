import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { CategorieService } from 'src/app/core/services/categorie.service';


@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

    constructor(private formBuilder : FormBuilder , private categorieService:CategorieService ){

    }

    categorieForm !: FormGroup
    selectedFile!: File;

    nameFile!:string

    onFileChanged(event: any): void {
      this.selectedFile = event.target.files[0];
    }



    ngOnInit(): void {
      this.categorieForm = this.formBuilder.group({
        nom: [null, [Validators.required , Validators.minLength(3)]],
        description: [null, [Validators.required, Validators.minLength(5)]],
        image: [null, [Validators.required]],
      })

      
    }

    get f() {
      return this.categorieForm.controls;
    }


    AjouterCategorie(){
      this.categorieService.addCategorie(this.categorieForm.get('nom')?.value,this.categorieForm.get('description')?.value,this.selectedFile.name).subscribe(
        ()=>{
          console.log("categorie added")
        }
      )
    }

}
