import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { Universite } from 'src/app/models/universite';
import { DepartementService } from 'src/app/service/departement.service';
import { UniversiteService } from 'src/app/service/universite.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.scss']
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[] = [];
  departements: Departement[] = []; // Ajoutez cette ligne
  nomUniversiteRecherche: string = '';


  constructor(
    private universiteService: UniversiteService,
    private departementService: DepartementService, // Ajoutez cette ligne
    private router: Router
  ) {}

  ngOnInit() {
    this.chargerUniversites();
  }

  chargerUniversites() {
    this.universiteService.findAllUniversites().subscribe(
      data => {
        this.universites = data;
        console.log('Universites from API:', this.universites);
      },
      error => {
        console.error('Error fetching universites:', error);
      }
    );
  }

  onGetDepartementsButtonClick(nomUniversite: string): void {
    // Utilisez le Router pour naviguer vers la page des départements avec le nom de l'université en tant que paramètre
    this.router.navigate(['/front/departement', nomUniversite.toLowerCase()]);
   
  }
}