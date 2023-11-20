import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import { AddLivreComponent } from './components/add-livre/add-livre.component';
import { ListLivreComponent } from './components/list-livre/list-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmpruntLivresComponent } from './components/list-emprunt-livres/list-emprunt-livres.component';


@NgModule({
  declarations: [
    AddLivreComponent,
    ListLivreComponent,
    ListEmpruntLivresComponent
  ],
  imports: [
    CommonModule,
    LivreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LivreModule { }
