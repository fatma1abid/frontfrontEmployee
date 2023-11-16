import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { LivreService } from 'src/app/core/services/livre.service';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/core/models/livre.model';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.scss']
})
export class AddLivreComponent {

  constructor(private formBuilder : FormBuilder , private livreService:LivreService , private categorieService:CategorieService ){

  }

  livreForm !: FormGroup
  selectedFile!: File;
  msg !: String;
  error !: String;

  categorieList !: Observable<Categorie[]>

  nameFile!:string

  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];

  }



  ngOnInit(): void {
    this.livreForm = this.formBuilder.group({
      titre: [null, [Validators.required , Validators.minLength(2)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      nomAuteur: [null, [Validators.required, Validators.minLength(2)]],
      nbPages: [null, [Validators.required]],
      dateDePublication: [null, [Validators.required]],
      categorie : [null , [Validators.required]],
      image: [null, [Validators.required]],
    })


    this.categorieList = this.categorieService.getAllCategorie() ;

    
  }

  get f() {
    return this.livreForm.controls;
  }


  AjouterLivre(){
    this.livreService.addLivre(this.livreForm.get('titre')?.value,
    this.livreForm.get('description')?.value,
    this.livreForm.get('nomAuteur')?.value,
    this.livreForm.get('nbPages')?.value,
    this.livreForm.get('dateDePublication')?.value,
    this.livreForm.get('categorie')?.value,
    this.selectedFile).subscribe(
      ()=>{
         this.msg = "Livre ajouté avec succées"
         this.livreForm.reset();
         this.livreService.getAllLivres();
         
      },
      ()=>{
           this.error = "Il ya une erreur qui est survenu"
      }
    )
  }

}
