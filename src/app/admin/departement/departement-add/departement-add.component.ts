import { Component } from '@angular/core';
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
  nouveauDepartement: Departement = new Departement();
  universites: Universite[] = [];
  selectedUniversiteId: number  =1 ;

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
    if (this.selectedUniversiteId) {
      // Ajouter le département
      this.departementService.addDepartement(this.nouveauDepartement).subscribe(
        (departement: Departement) => {
          console.log('Département ajouté avec succès:', departement);
          console.log('selectedUniversiteId:', this.selectedUniversiteId);

          
          this.universiteService.affecterDepartementAUniversite(departement.idDepartement, this.selectedUniversiteId).subscribe(
            () => {
              console.log('Département affecté à l\'université avec succès.');
              
              // Réinitialiser le formulaire
              this.nouveauDepartement = new Departement();
            },
            (error) => {
              console.error('Erreur lors de l\'affectation du département à l\'université:', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du département:', error);
        }
      );
    } else {
      console.error('Veuillez sélectionner une université avant d\'ajouter le département.');
    }
                  this.router.navigate(['/admin/departement/afficher']);

  }
}