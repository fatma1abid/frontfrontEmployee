import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/list-categorie/list-categorie.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModificationDialogComponent } from './components/modification-dialog/modification-dialog.component';


@NgModule({
  declarations: [
    AddCategorieComponent,
    ListCategorieComponent,
    ModificationDialogComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class CategorieModule { }
