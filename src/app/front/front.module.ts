import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';

import { BlocModule } from './bloc/bloc.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccueilFrontComponent,
   
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
  
  
    BlocModule
  ]
})
export class FrontModule { }
