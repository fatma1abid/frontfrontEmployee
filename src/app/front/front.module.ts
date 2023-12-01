import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ModifResComponent } from './reservation/components/modif-res/modif-res.component';
 


@NgModule({
  declarations: [
    AccueilFrontComponent
  
    
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
