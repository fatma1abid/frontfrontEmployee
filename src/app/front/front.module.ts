import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';


@NgModule({
  declarations: [
    AccueilFrontComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
