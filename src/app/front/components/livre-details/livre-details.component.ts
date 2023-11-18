import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { LivreService } from 'src/app/core/services/livre.service';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.scss']
})
export class LivreDetailsComponent implements OnInit {


  constructor(private livreService:LivreService , private route:ActivatedRoute , private categorieService:CategorieService,private router:Router){

  }


  idLivre !: number;

  livre !: any;


  ngOnInit(): void {
    this.idLivre = this.route.snapshot.params['idLivre'];

    this.livre = this.livreService.getLivre(this.idLivre).subscribe(
      result =>{
        console.log(result.titre)
      }
    )
  }

}
