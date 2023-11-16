import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { UpdateProfileComponent } from './components/user/update-profile/update-profile.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'updateProfile', component:UpdateProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
