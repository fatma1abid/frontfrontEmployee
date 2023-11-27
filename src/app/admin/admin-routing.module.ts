import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  {path: 'chambre', loadChildren: () => import('./chambre/chambre.module').then(m => m.ChambreModule) },
  //{path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.reservationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
