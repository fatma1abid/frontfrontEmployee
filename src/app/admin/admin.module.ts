import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { FoyerModule } from './foyer/foyer.module';
import { BlocModule } from '../front/bloc/bloc.module';


@NgModule({
  declarations: [
    PageAccueilComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FoyerModule,
    BlocModule,
  
  ]
})
export class AdminModule { }
