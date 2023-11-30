import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  {path:'reservation', loadChildren: () => import('../front/reservation/reservation.module').then(m => m.ReservationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
