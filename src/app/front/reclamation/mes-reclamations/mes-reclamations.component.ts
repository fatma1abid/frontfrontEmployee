import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.scss']
})
export class MesReclamationsComponent implements OnInit {
reclamations!:any
user!:any
isEditModal : boolean=false;
selectedReclamation:any;
constructor(private reclamationService:ReclamationService,
  private userService:UserService){

}
ngOnInit(): void {
  this.userService.getUserByEmail(this.userService.getUserEmail()).subscribe(resultat=>{
    this.user = resultat;
    this.reclamationService.getMyRec( resultat.email,"archivé").subscribe({
      next:(rec)=>this.reclamations =rec,
      error:(r)=>alert(r)
    }

    )

  });
  }
  rechargeReclamations(){
    this.reclamationService.getMyRec( this.user.email,"archivé").subscribe({
      next:(rec)=>this.reclamations =rec,
      error:(r)=>alert(r)
    }
  
    )}
    openEdit(reclamation:any){
      this.isEditModal =true;
      this.selectedReclamation = reclamation;
    }
    openAdd(){
      this.isEditModal = false;
    }
}


