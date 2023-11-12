import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCategorieComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategorieModule { }
