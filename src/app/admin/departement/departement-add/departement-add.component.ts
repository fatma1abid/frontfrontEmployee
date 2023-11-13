  import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DepartementService } from 'src/app/service/departement.service';

  @Component({
    selector: 'app-departement-add',
    templateUrl: './departement-add.component.html',
    styleUrls: ['./departement-add.component.scss']
  })
  export class DepartementAddComponent {
    nouveauDepartement: Departement = new Departement();
  
    constructor(private departementService: DepartementService, private router: Router) {}
  
    ajouterDepartement() {
      this.departementService.addDepartement(this.nouveauDepartement).subscribe(
        (data) => {
          console.log('Departement ajouté avec succès:', data);
          // Redirigez vers la liste des départements après l'ajout
          this.router.navigate(['admin/departement/afficher']);

        },
        (error) => {
          console.error('Erreur lors de l\'ajout du département:', error);
        }
      );
    }
  }