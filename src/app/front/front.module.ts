import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { ListLivresComponent } from './components/list-livres/list-livres.component';
import { LivreDetailsComponent } from './components/livre-details/livre-details.component';


@NgModule({
  declarations: [
    AccueilFrontComponent,
    ListCategorieComponent,
    ListLivresComponent,
    LivreDetailsComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
