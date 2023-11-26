import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.scss']
})
export class UniversiteAddComponent implements OnInit {
  universiteForm!: FormGroup;

  constructor(private universiteService: UniversiteService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.universiteForm = this.fb.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
      etatUniversite: ['public', Validators.required]
    });
  }

  ajouterUniversite(): void {
    if (this.universiteForm.valid) {
      const nouvelleUniversite: Universite = this.universiteForm.value;

      this.universiteService.addUniversite(nouvelleUniversite).subscribe(
        (result) => {
          console.log('Université ajoutée avec succès', result);
          this.router.navigate(['/admin/universite/afficher']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'université', error);
        }
      );
    }
  }
}
