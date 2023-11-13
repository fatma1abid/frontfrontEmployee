import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DepartementService } from 'src/app/service/departement.service';

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

  supprimerDepartement(idDepartement: number) {
    this.departementService.deleteDepartement(idDepartement).subscribe(
      () => {
        console.log('Département supprimé avec succès');
        // Rechargez la liste des départements après la suppression
        this.chargerDepartements();
      },
      error => {
        console.error('Erreur lors de la suppression du département:', error);
      }
    );
  }
}