// universite-add.component.ts

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.scss']
})
export class UniversiteAddComponent {
  nouvelleUniversite: Universite = new Universite();

  constructor(private universiteService: UniversiteService ,private router: Router) {}

  ajouterUniversite() {
    this.universiteService.addUniversite(this.nouvelleUniversite)
      .subscribe(
        (result) => {
          
          console.log('Université ajoutée avec succès', result);
          this.router.navigate(['/admin/universite/afficher']);

          // Ajoutez une logique de redirection ou de traitement supplémentaire si nécessaire
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'université', error);
        }
      );
  }
}
