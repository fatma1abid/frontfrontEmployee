import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/core/models/livre.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-demande-emprunt',
  templateUrl: './demande-emprunt.component.html',
  styleUrls: ['./demande-emprunt.component.scss']
})
export class DemandeEmpruntComponent implements OnInit{
    
  constructor(private livreService:LivreService , private route:ActivatedRoute , private categorieService:CategorieService,private router:Router){

  }


  idLivre !: Number;

  livre$ !: Observable<Livre>;

  ngOnInit(): void {

    this.idLivre = this.route.snapshot.params['idLivre'];

    this.livre$ = this.livreService.getLivre(this.idLivre);
    
  }


}
