import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
//import { ListChambreComponent } from './components/list-chambre/list-chambre.component';
import { ReservationRoutingModule } from  './reservation-routingmodule';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [AddReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReservationModule { }
