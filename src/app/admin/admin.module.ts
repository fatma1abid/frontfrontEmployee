import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { FilterPipe } from 'src/filter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageAccueilComponent,
    
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
