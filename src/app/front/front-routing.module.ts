import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path: 'user', component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
