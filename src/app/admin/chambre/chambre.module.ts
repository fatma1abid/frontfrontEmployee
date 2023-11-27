import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';
//import { ListChambreComponent } from './components/list-chambre/list-chambre.component';
import { ChambreRoutingModule } from './chambre-routingmodule';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddChambreComponent,
   //ListChambreComponent,

  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ChambreModule { }
