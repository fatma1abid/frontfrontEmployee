import { Chambre } from "./chambre.model";
import { Utilisateur } from "./utilisateur.model";

export class Reservation {
    idReservation?: number;
    anneeUniversitaire!: Date;
    estValide!: Boolean;
    utilisateur?: Utilisateur[];
    chambre?:Chambre[];

  }