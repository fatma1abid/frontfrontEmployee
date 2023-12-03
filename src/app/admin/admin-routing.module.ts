import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'accueil' , component:PageAccueilComponent},
  { path: 'foyer', loadChildren: () => import('./foyer/foyer.module').then(m => m.FoyerModule) },
  { path: 'bloc', loadChildren: () => import('./bloc/bloc.module').then(m => m.BlocModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
