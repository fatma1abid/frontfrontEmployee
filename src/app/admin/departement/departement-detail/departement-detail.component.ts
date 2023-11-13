import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/Departement';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-departement-detail',
  templateUrl: './departement-detail.component.html',
  styleUrls: ['./departement-detail.component.scss']
})

export class DepartementDetailComponent implements OnInit {
  departement: Departement = new Departement();

  constructor(
    private departementService: DepartementService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const originalId = params['id'];

      console.log('id:', originalId);

      const convertedId = +originalId;

      if (!isNaN(convertedId)) {
        console.log('Converted id:', convertedId);

        this.departementService.getDepartementById(convertedId).subscribe(
          (data: Departement) => {
            this.departement = data;
            console.log('Fetched departement data:', data);
            this.cd.detectChanges();
          },
          (error) => {
            console.error('Error fetching departement:', error);
          }
        );
      } else {
        console.error('Invalid id:', originalId);
      }
    });
  }

  enregistrerDepartement(f: NgForm) {
    const id = this.departement.id;
    this.departementService.updateDepartement(id, this.departement).subscribe(
      (data) => {
        console.log('Departement updated successfully:', data);
        this.router.navigate(['/admin/departement/afficher']);
      },
      (error) => {
        console.error('Error updating departement:', error);
      }
    );
  }
}