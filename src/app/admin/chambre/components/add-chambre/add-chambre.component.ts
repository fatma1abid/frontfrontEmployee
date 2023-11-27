import { Component ,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ChambreService } from 'src/app/core/services/chambre.service';
import { Chambre } from 'src/app/core/models/chambre.model';
import { TypeChambre } from 'src/app/core/models/TypeChambre.model';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss']
})
export class AddChambreComponent implements OnInit{
  constructor(private formBuilder : FormBuilder , private chambreService:ChambreService ){}

  
   


  chambreForm !: FormGroup
  selectedFile!: File;
  msg !: String;
  error !: String;

  

  onFileChanged(event: any): void {
    this.selectedFile =  event.target.files[0];

  }

  ngOnInit(): void {
    this.chambreForm = this.formBuilder.group({
      numero: [null, [Validators.required , Validators.minLength(1)]],
      typechambre: [null, [Validators.required, Validators.minLength(1)]],
  
    })

    
  }

  get f() {
    return this.chambreForm.controls;
  }

  
  AjouterChambre(){
    this.chambreService.addChambre(this.chambreForm. get('numero')?.value,this.chambreForm.get('typechambre')?.value).subscribe(
      ()=>{
         this.msg = "Chambre ajouté avec succées"
         this.chambreForm.reset();
         this.refreshChambreList();
      },
      ()=>{
           this.error = "Il ya une erreur qui est survenu"
      }
    )  }

 

  private refreshChambreList() {
    this.chambreService.getAllChambre();
  }
}
