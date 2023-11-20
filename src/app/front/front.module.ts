import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListbibliosComponent } from './components/listbiblios/listbiblios.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AccueilFrontComponent,
    ListbibliosComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FullCalendarModule
  ]
})
export class FrontModule { }
