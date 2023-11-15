import { Component , OnInit } from '@angular/core';
import { Evenement } from 'src/app/core/models/Evenement.model';
import { EvenementService } from 'src/app/core/services/EvenementService';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listevenement',
  templateUrl: './listevenement.component.html',
  styleUrls: ['./listevenement.component.scss']
})
export class ListevenementComponent implements OnInit {


  constructor(private EvenementService : EvenementService){

  }

  eventList !: Observable<Evenement[]>


   ngOnInit(): void {
     this.eventList =  this.EvenementService.getAllEvents();
   

 
}}