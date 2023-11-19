import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListbibliosComponent } from './components/listbiblios/listbiblios.component';


@NgModule({
  declarations: [
    AccueilFrontComponent,
    ListbibliosComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
