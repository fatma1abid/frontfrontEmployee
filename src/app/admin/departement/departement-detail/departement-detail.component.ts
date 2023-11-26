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
  selectedUniversiteId: number =1 ;

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
    this.departementService.updateDepartement(id, this.departement).subscribe(
      (data) => {
        console.log('Departement updated successfully:', data);
        this.router.navigate(['/admin/departement/afficher']);
      },
      (error) => {
        console.error('Error updating departement:', error);
      }
    );
    if (this.selectedUniversiteId) {
      this.departementService.affecterDepartementAUniversite(this.departement.idDepartement, this.selectedUniversiteId).subscribe(
        () => {
          console.log('Département affecté à l\'université avec succès.');
  
        },
        (error) => {
          console.error('Erreur lors de l\'affectation du département à l\'université:', error);
        }
      );
    } else {
      console.error('Veuillez sélectionner une université avant d\'affecter le département.');
    
  }
  
  }


}
