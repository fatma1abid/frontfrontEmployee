import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartementListComponent,
    DepartementDetailComponent,
    DepartementAddComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DepartementModule { }
