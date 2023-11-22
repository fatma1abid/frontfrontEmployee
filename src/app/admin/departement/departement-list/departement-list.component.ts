import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DepartementService } from 'src/app/service/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.scss']
})
export class DepartementListComponent implements OnInit {
  departements: Departement[] = [];

  constructor(private departementService: DepartementService, private router: Router) {}

  ngOnInit() {
    this.chargerDepartements();
  }

  chargerDepartements() {
    this.departementService.getAllDepartements().subscribe(
      data => {
        this.departements = data;
        console.log('Départements depuis l\'API:', this.departements);
      },
      error => {
        console.error('Erreur lors de la récupération des départements:', error);
      }
    );
  }

  navigateToEdit(idDepartement: number) {
    this.router.navigate(['/admin/departement/update', idDepartement]);
  }

  supprimerDepartement(id: number, nomDepartement: string) {
    console.log('ID du département à supprimer :', id); // Ajoutez cette ligne
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer le département ' + nomDepartement + ' ?',
      text: 'Vous ne pourrez pas récupérer ces données après la suppression !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        if (!isNaN(id) && id !== null && id !== undefined) {
          this.departementService.deleteDepartement(id).subscribe(
            () => {
              console.log('Département supprimé avec succès');
              // Rechargez la liste des départements après la suppression
              this.chargerDepartements();
            },
            error => {
              console.error('Erreur lors de la suppression du département:', error);
            }
          );
          Swal.fire(
            'Supprimé !',
            'Le département a été supprimé avec succès.',
            'success'
          );
        } else {
          console.error('ID invalide. La suppression du département ne peut pas être effectuée.');
        }
      }
    });
  }
}