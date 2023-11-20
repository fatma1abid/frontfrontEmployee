import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { empruntLivre } from 'src/app/core/models/empruntLivre.models';
import { EmpruntLivreService } from 'src/app/core/services/empruntLivre.service';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-list-emprunt-livres',
  templateUrl: './list-emprunt-livres.component.html',
  styleUrls: ['./list-emprunt-livres.component.scss']
})
export class ListEmpruntLivresComponent implements OnInit {


  constructor( private EmpruntLivreService:EmpruntLivreService , private livreService:LivreService){
  }



  msg!:string;
  error!:string;

  empruntLivreList !: any[]; 
  empruntDetailsList: any[] = []; 


  ngOnInit(): void {
    this.EmpruntLivreService.getAllEmpruntLivre().subscribe((emprunts: any[]) => {
      this.empruntLivreList = emprunts;

      this.initEmpruntDetailsList();
    });
  }

  initEmpruntDetailsList(): void {
    const observables: Observable<any>[] = this.empruntLivreList.map(emprunt => {
      const userObservable = this.livreService.getUserByEmprunt(emprunt.idEmprunt);
      const livreObservable = this.livreService.getLivreByEmprunt(emprunt.idEmprunt);

      return forkJoin([userObservable, livreObservable]).pipe(
        map(([userDetails, livreDetails]) => {
          return {
            emprunt,
            user: userDetails,
            livre: livreDetails
          };
        })
      );
    });

    forkJoin(observables).subscribe((result: any[]) => {
      this.empruntDetailsList = result;
    });
  }
}


