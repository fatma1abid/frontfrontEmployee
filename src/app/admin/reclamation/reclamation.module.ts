import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeReclamationsComponent } from './liste-reclamations/liste-reclamations.component';
import { FormulaireReclamationComponent } from './formulaire-reclamation/formulaire-reclamation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReclamationRoutingModule } from './reclamation-routing.module';



@NgModule({
  declarations: [
    ListeReclamationsComponent,
    FormulaireReclamationComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }
