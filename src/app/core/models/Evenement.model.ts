import { EtatEvenement } from '../models/etatEvenement.enum';
export class Evenement{
    idEvenement?:number;
    nomE!:string;
    dateDebut!:Date;
    dateFin!:Date;
    lieu!:string;
    description!:string;
    etatEvent!:EtatEvenement;;
    image!:File;

    
    
   
   }