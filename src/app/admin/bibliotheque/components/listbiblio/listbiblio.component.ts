import { Component , OnInit } from '@angular/core';
import { Bibliotheque } from 'src/app/core/models/Bibliotheque.model';
import { BiblioService } from 'src/app/core/services/BiblioService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listbiblio',
  templateUrl: './listbiblio.component.html',
  styleUrls: ['./listbiblio.component.scss']
})
export class ListbiblioComponent implements OnInit {


  constructor(private BiblioService : BiblioService , private router: Router){

  }
 
  biblioList !: Observable<Bibliotheque[]>


   ngOnInit(): void {
     this.biblioList =  this.BiblioService.getAllBiblios();
   
}
redirigerVersModification(idBibliotheque: number) {
  this.router.navigate(['/updatebiblio', idBibliotheque]);
}
supprimerBiblio(idBibliotheque: any): void {
  Swal.fire({
    title: 'Êtes-vous sûr ?',
    text: 'Cette action est irréversible !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Oui, supprimer !'
  }).then((result) => {
    // Si l'utilisateur a confirmé la suppression
    if (result.isConfirmed) {
  this.BiblioService.deleteBiblio(idBibliotheque).subscribe(
    () => {
      console.log('Bibliotheque supprimée avec succès');
      this.BiblioService.getAllBiblios();
      // Effectuez toute action supplémentaire après la suppression si nécessaire
    },
    (error) => {
      console.error('Erreur lors de la suppression de l\'événement :', error);
    }
  );
  Swal.fire(
    'Supprimée !',
    'La Bibliotheque a été supprimée avec succès.',
    'success'
    );
  }
});
}
}
