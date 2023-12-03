import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { Universite } from 'src/app/models/universite';
import { DepartementService } from 'src/app/service/departement.service';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.scss']
})
export class DepartementAddComponent {
  @Output() departementAjoute = new EventEmitter<Departement>();
  nouveauDepartement: Departement = new Departement();
  universites: Universite[] = [];
  selectedUniversiteId: number = 1;
  errorMessage: string = '';

  constructor(
    private departementService: DepartementService,
    private universiteService: UniversiteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.universiteService.findAllUniversites().subscribe((data: Universite[]) => {
      this.universites = data;
    });
  }

  ajouterDepartement() {
    // Check if all conditions are met
    if (
      this.nouveauDepartement.nomDepartement &&
      this.nouveauDepartement.responsable &&
      this.nouveauDepartement.specialite &&
      /^[A-Z]/.test(this.nouveauDepartement.nomDepartement) &&
      /^[A-Z]/.test(this.nouveauDepartement.responsable) &&
      /^[A-Z]/.test(this.nouveauDepartement.specialite.toString())
    ) {
      if (this.selectedUniversiteId) {
        // Ajouter le département
        this.departementService.addDepartement(this.nouveauDepartement).subscribe(
          (departement: Departement) => {
            console.log('Département ajouté avec succès:', departement);
            console.log('selectedUniversiteId:', this.selectedUniversiteId);

            this.universiteService.affecterDepartementAUniversite(departement.idDepartement, this.selectedUniversiteId).subscribe(
              () => {
                console.log('Département affecté à l\'université avec succès.');
                this.departementAjoute.emit(departement);
                // Réinitialiser le formulaire
                this.nouveauDepartement = new Departement();
                this.errorMessage = ''; // Clear any previous error message
              },
              (error) => {
                this.errorMessage = 'Erreur lors de l\'affectation du département à l\'université:' + error.message;
              }
            );
          },
          (error) => {
            this.errorMessage = 'Erreur lors de l\'ajout du département:' + error.message;
          }
        );
      } else {
        this.errorMessage = 'Veuillez sélectionner une université avant d\'ajouter le département.';
      }
      this.router.navigate(['/admin/departement/afficher']);
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs et commencer les champs appropriés par une lettre majuscule.';
    }
  }
}
