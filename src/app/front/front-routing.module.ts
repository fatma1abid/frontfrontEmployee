import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';
import { ListbibliosComponent } from './components/listbiblios/listbiblios.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'listBibs' , component:ListbibliosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
