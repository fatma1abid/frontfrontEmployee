import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UniversiteListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UniversiteModule { }
