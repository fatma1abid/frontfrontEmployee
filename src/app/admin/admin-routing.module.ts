import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  {path: 'bibliotheque', loadChildren: () => import('./bibliotheque/bibliotheque.module').then(m => m.BibliothequeModule) },
  {path: 'evenement', loadChildren: () => import('./evenement/evenement.module').then(m => m.EvenementModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
