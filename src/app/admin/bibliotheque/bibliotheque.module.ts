import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BibliothequeRoutingModule } from './bibliotheque-routing.module';
import { AddbiblioComponent } from './components/addbiblio/addbiblio.component';
import { UpdatebiblioComponent } from './components/updatebiblio/updatebiblio.component';
import { ListbiblioComponent } from './components/listbiblio/listbiblio.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddbiblioComponent,
    UpdatebiblioComponent,
    ListbiblioComponent,
 
  ],
  imports: [
    CommonModule,
    BibliothequeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ]
})
export class BibliothequeModule { }
