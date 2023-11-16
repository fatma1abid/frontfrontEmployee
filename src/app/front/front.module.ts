import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/user/login/login.component';
import { UpdateProfileComponent } from './components/user/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AccueilFrontComponent,
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FrontModule { }
