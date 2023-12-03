import { Chambre } from "./chambre.model";
import { Utilisateur } from "./utilisateur.model";
import { DatePipe } from '@angular/common';
export class Reservation   {
    idReservation?: number;
    anneeUniversitaire?: Date;
    estValide ?: Boolean;
    chambre ?:Chambre;
   
     
    //utilisateur?: Utilisateur[];
    

  }