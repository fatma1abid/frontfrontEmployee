import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import { AddLivreComponent } from './components/add-livre/add-livre.component';
import { ListLivreComponent } from './components/list-livre/list-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLivreComponent,
    ListLivreComponent
  ],
  imports: [
    CommonModule,
    LivreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LivreModule { }
