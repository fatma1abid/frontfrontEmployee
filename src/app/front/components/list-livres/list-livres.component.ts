import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Livre } from 'src/app/core/models/livre.model';
import { LivreService } from 'src/app/core/services/livre.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.scss']
})
export class ListLivresComponent implements OnInit {

  constructor(private livreService:LivreService , private route:ActivatedRoute){

  }


  livreList !: Observable<Livre[]>
  idCategory !: number;

  urlImage : string  = 'http://localhost:8080/images_livres' 

  ngOnInit(): void {
     
    this.idCategory = this.route.snapshot.params['idCategory'];

    this.livreList = this.livreService.getAllLivresByCategory(this.idCategory);
    
  }

}
