import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilFrontComponent } from './components/accueil-front/accueil-front.component';

const routes: Routes = [
  {path:'accueil' , component:AccueilFrontComponent},
  { path: 'foyer', loadChildren: () => import('./foyer/foyer.module').then(m => m.FoyerModule) },
  { path: 'bloc', loadChildren: () => import('./bloc/bloc.module').then(m => m.BlocModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
