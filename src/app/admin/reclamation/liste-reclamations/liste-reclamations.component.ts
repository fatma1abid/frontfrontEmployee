import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-reclamations',
  templateUrl: './liste-reclamations.component.html',
  styleUrls: ['./liste-reclamations.component.scss']
})
export class ListeReclamationsComponent implements OnInit{
reclamations!:any
user!:any
isEditModal : boolean=false;
selectedReclamation:any;
constructor(private reclamationService:ReclamationService,
  private userService:UserService){

}
ngOnInit(): void {
  
    this.reclamationService.getAllRec("archivé").subscribe({
      next:(rec)=>this.reclamations =rec,
      error:(r)=>alert(r)
    })
  }
  rechargeReclamations(){
    this.reclamationService.getAllRec("archivé").subscribe({
      next:(rec)=>this.reclamations =rec,
      error:(r)=>alert(r)
    }
  
    )}
    openEdit(reclamation:any){
      this.isEditModal =true;
      console.log(this.isEditModal);
      this.selectedReclamation = reclamation;
    }
}
