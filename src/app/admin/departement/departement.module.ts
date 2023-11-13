import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';


@NgModule({
  declarations: [
    DepartementListComponent,
    DepartementDetailComponent,
    DepartementAddComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
