import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';


@NgModule({
  declarations: [
    AccueilFrontComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
