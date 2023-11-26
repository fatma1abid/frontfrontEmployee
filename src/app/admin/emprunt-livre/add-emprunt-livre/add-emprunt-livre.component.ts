import { Component , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { empruntLivre } from 'src/app/core/models/empruntLivre.models';
import { Livre } from 'src/app/core/models/livre.model';
import { EmpruntLivreService } from 'src/app/core/services/empruntLivre.service';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-add-emprunt-livre',
  templateUrl: './add-emprunt-livre.component.html',
  styleUrls: ['./add-emprunt-livre.component.scss']
})
export class AddEmpruntLivreComponent {

  constructor(private empruntLivreService:EmpruntLivreService , private livreService:LivreService ){

  }

  selectedFile!: File;
  msg !: String;
  error !: String;

  nameFile!:string

  livreList !: Observable<Livre[]>

  emprunt:empruntLivre = new empruntLivre ();


  
  @ViewChild('addEmprunt') addEmpruntForm!: NgForm;


  ngOnInit(): void {

    this.livreList = this.livreService.getAllLivres();

  }

  ajouterEmpruntLivre(){


    this.empruntLivreService.addEmpruntLivreAdmin(this.addEmpruntForm.value.email,this.addEmpruntForm.value.dateDebutEmprunt,this.addEmpruntForm.value.dateFinEmprunt,this.addEmpruntForm.value.livreSelect).subscribe(
      ()=>{
        this.msg = "Emprunt livre ajouté avec succées"       
        this.addEmpruntForm.reset() 
     },
     ()=>{
          this.error = "Il ya une erreur qui est survenu"
     }
     )
    
    
  }

}

  
