import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/core/models/chambre.model';
import { ChambreService } from 'src/app/core/services/chambre.service';
//import { MatDialog } from '@angular/material/dialog';
//import { ConfirmationDialogComponent } from 'src/app/admin/components/confirmation-dialog/confirmation-dialog.component';
//import { ModificationDialogComponent } from 'src/app/admin/categorie/components/modification-dialog/modification-dialog.component';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})
export class ListChambreComponent {
   


  constructor(private chambreService : ChambreService ){}

}
