import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/core/models/livre.model';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.scss']
})
export class ListLivreComponent {

  constructor(private livreService : LivreService){

  }

  livreList !: Observable<Livre[]>
  urlImage : string  = 'http://localhost:8080/images_livres' 


   ngOnInit(): void {
     this.livreList =  this.livreService.getAllLivres();
   }



   modifierLivre(id:any){

   }


   supprimerLivre(id:any){
    this.livreService.supprimerLivre(id).subscribe(
      ()=>{
          this.livreService.getAllLivres();
      },
      ()=>{

      }
    )

   }


}
