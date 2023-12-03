import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { Universite } from 'src/app/models/universite'; // Make sure you import the Universite model
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-departement-detail',
  templateUrl: './departement-detail.component.html',
  styleUrls: ['./departement-detail.component.scss']
})

export class DepartementDetailComponent implements OnInit {
  departement: Departement = new Departement();
  universites: Universite[] = []; // Declare universites array
  selectedUniversiteId: number | undefined;

  constructor(
    private departementService: DepartementService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const originalId = params['idDepartement'];
  
      const convertedId = +originalId;
  
      if (!isNaN(convertedId)) {
        this.departementService.getDepartementById(convertedId).subscribe(
          (data: Departement) => {
            this.departement = data;
  
            // Ensure that the universite property is initialized
            this.departement.universite = this.departement.universite || new Universite();
  
            this.cd.detectChanges();
          },
          (error) => {
            console.error('Error fetching departement:', error);
          }
        );
      } else {
        console.error('Invalid idDepartement:', originalId);
      }
    });
  
    this.departementService.getUniversites().subscribe(
      (data: Universite[]) => {
        this.universites = data;
      },
      (error) => {
        console.error('Error fetching universities:', error);
      }
    );
  }
  
  enregistrerDepartement(f: NgForm) {
    const id = this.departement.idDepartement;
  
    // Ensure that departement.universite is initialized
    this.departement.universite = this.departement.universite || new Universite();
  
    // Check if selectedUniversiteId is defined before assignment
    if (this.selectedUniversiteId !== undefined) {
      // Update the university ID in the departement object
      this.departement.universite.idUniversite = this.selectedUniversiteId;
    } else {
      console.error('Selected university ID is undefined. Unable to update.');
      return; // Stop further processing if the ID is undefined
    }
  
    this.departementService.updateDepartement(id, this.departement).subscribe(
      (data) => {
        console.log('Departement updated successfully:', data);
        this.router.navigate(['/admin/departement/afficher']);
      },
      (error) => {
        console.error('Error updating departement:', error);
      }
    );
  
 
  
    if (this.selectedUniversiteId !== undefined && this.selectedUniversiteId !== null) {
      console.log('selectedUniversiteId:', this.selectedUniversiteId);
  
      // Check if universite is defined before accessing its properties
      if (this.departement.universite && this.departement.universite.idUniversite !== this.selectedUniversiteId) {
        this.departementService.affecterDepartementAUniversite(this.departement.idDepartement, this.selectedUniversiteId).subscribe(
          () => {
            console.log('Département affecté à l\'université avec succès.');
          },
          (error) => {
            console.error('Erreur lors de l\'affectation du département à l\'université:', error);
          }
        );
      } else {
        console.log('No change in the selected university or universite is undefined.');
      }
    } else {
      console.error('Veuillez sélectionner une université avant d\'affecter le département.');
    }
  }
  
  
  
}  