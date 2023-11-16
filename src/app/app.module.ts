import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ModificationDialogComponent } from './modification-dialog/modification-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificationDialogLivreComponent } from './modification-dialog-livre/modification-dialog-livre.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    ModificationDialogComponent,
    ModificationDialogLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
   
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
