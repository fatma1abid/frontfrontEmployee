import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { ListEtudiantsComponent } from './components/user/list-etudiants/list-etudiants.component';


@NgModule({
  declarations: [
    PageAccueilComponent,
    ListEtudiantsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
