import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteAddComponent } from './universite-add/universite-add.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversiteAddComponent,
    UniversiteListComponent,
    UniversiteUpdateComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UniversiteModule { }
