import { Component , OnInit } from '@angular/core';
import { Bibliotheque } from 'src/app/core/models/Bibliotheque.model';
import { BiblioService } from 'src/app/core/services/BiblioService';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updatebiblio',
  templateUrl: './updatebiblio.component.html',
  styleUrls: ['./updatebiblio.component.scss']
})
export class UpdatebiblioComponent implements OnInit {
    biblioForm!: FormGroup;
    idBibliotheque: number | null = null;
  
    constructor(
      private fb: FormBuilder,
      private biblioService: BiblioService,
      private route: ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      this.biblioForm = this.fb.group({
        nomB: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        numtel: [null, [Validators.required, Validators.minLength(8)]],
        horaire: [null, [Validators.required, Validators.minLength(3)]],
        description: [null, [Validators.required, Validators.minLength(5)]],
      });
  
      // Récupérez l'ID de la bibliothèque à partir de l'URL
      const idParam = this.route.snapshot.paramMap.get('id');
      this.idBibliotheque = idParam !== null ? +idParam : null;
        
      // Chargez les détails de la bibliothèque à partir de l'API Angular
      if (this.idBibliotheque !== null) {
        this.biblioService.getBibliothequeById(this.idBibliotheque).subscribe(
          (bibliotheque: Bibliotheque) => {
            // Faites quelque chose avec la bibliothèque récupérée
          },
          (error) => {
            // Gérez les erreurs, par exemple, redirigez vers une page d'erreur
          }
        );
      }
    }
  
  
    // La méthode pour pré-remplir le formulaire
    preRemplirFormulaire(bibliotheque: Bibliotheque) {
      this.biblioForm.patchValue({
        nomB: bibliotheque.nomB,
        email: bibliotheque.email,
        numtel: bibliotheque.numtel,
        horaire: bibliotheque.horaire,
        description: bibliotheque.description,
      });
    }
  }