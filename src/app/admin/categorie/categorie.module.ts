import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';


@NgModule({
  declarations: [
    AddCategorieComponent,
    ListCategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule
  ]
})
export class CategorieModule { }
