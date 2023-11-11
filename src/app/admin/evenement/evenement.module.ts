import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { AddevenementComponent } from './components/addevenement/addevenement.component';


@NgModule({
  declarations: [
    AddevenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule
  ]
})
export class EvenementModule { }
