import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliothequeRoutingModule } from './bibliotheque-routing.module';
import { AddbiblioComponent } from './components/addbiblio/addbiblio.component';
import { UpdatebiblioComponent } from './components/updatebiblio/updatebiblio.component';
import { ListbiblioComponent } from './components/listbiblio/listbiblio.component';


@NgModule({
  declarations: [
    AddbiblioComponent,
    UpdatebiblioComponent,
    ListbiblioComponent
  ],
  imports: [
    CommonModule,
    BibliothequeRoutingModule
  ]
})
export class BibliothequeModule { }
