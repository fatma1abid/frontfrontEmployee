import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccueilFrontComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FrontRoutingModule,
    SharedModule
  ]
})
export class FrontModule { }
