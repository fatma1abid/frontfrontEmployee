import { Component , OnInit } from '@angular/core';
import { Evenement } from 'src/app/core/models/Evenement.model';
import { EvenementService } from 'src/app/core/services/EvenementService';
import { Observable } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updateevenement',
  templateUrl: './updateevenement.component.html',
  styleUrls: ['./updateevenement.component.scss']
})
export class UpdateevenementComponent implements OnInit {

  evenementForm: FormGroup;
 idEvenement: number = 0; // Initialisez idEvenement à une valeur par défaut
  evenementDetails: Evenement = new Evenement(); 
  selectedFile!: File;
  nameFile!:string

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  constructor(private fb: FormBuilder, private evenementService: EvenementService, private route: ActivatedRoute) {
    this.evenementForm = this.fb.group({
      nomE: [null, Validators.required],
      dateDebut: [null, Validators.required],
      dateFin: [null, Validators.required],
      lieu: [null, Validators.required],
      description: [null, [Validators.required, Validators.minLength(5)]],
      etat: [null, Validators.required],
      image: [null]    });
  }
  get f() {
    return this.evenementForm.controls;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idEvenement = +params['id']; // Récupérez l'ID de l'URL
      this.loadEvenementDetails();
    });
  }

  loadEvenementDetails() {
    // Utilisez EvenementService pour obtenir les détails de l'événement à partir de l'API
    this.evenementService.getEvenementDetails(this.idEvenement).subscribe(
      (evenement) => {
        this.evenementDetails = evenement;

        // Mettez à jour les valeurs du formulaire avec les détails de l'événement
        this.evenementForm.patchValue({
          nomE: evenement.nomE,
          dateDebut: evenement.dateDebut,
          dateFin: evenement.dateFin,
          lieu: evenement.lieu,
          description: evenement.description,
          etat: evenement.etat,
          image: evenement.image        });
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l\'événement :', error);
      }
    );
  }

  mettreAJourEvenement() {
    if (this.evenementDetails && this.evenementDetails.idEvenement !== undefined) {
      const updatedEvent = this.evenementForm.value;
      this.evenementService.updateEvent(this.evenementDetails.idEvenement, updatedEvent).subscribe(
        () => {
          console.log('Evenement mis à jour avec succès');
          // Effectuez toute action supplémentaire après la mise à jour si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'événement :', error);
        }
      );
    } else {
      console.error('ID de l\'événement non défini. Impossible de mettre à jour.');
      // Affichez un message d'erreur à l'utilisateur ou prenez une autre action appropriée.
    }
  }
}