import {TypeChambre} from "./TypeChambre.model";
import { Reservation } from "./reservation.model";

export class Chambre {
    idChambre?: number;
    numeroChambre!: number;
    typeChambre!: TypeChambre;
   // bloc?: Bloc[]; 
    //reservations?:  Reservation[];
}