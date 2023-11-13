import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.scss']
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[] = [];

  constructor(private universiteService: UniversiteService, private router: Router) {}

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

  navigateToEdit(idUniversite: number) {
    this.router.navigate(['/admin/universite/update', idUniversite]);
  }

  supprimerUniversite(idUniversite: number) {
    this.universiteService.deleteUniversite(idUniversite).subscribe(
      () => {
        console.log('Universite deleted successfully');
        // Rechargez la liste des universités après la suppression
        this.chargerUniversites();
      },
      error => {
        console.error('Error deleting universite:', error);
      }
    );
  }
}